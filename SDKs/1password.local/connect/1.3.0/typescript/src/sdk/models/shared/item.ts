import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ItemCategoryEnum {
    Login = "LOGIN"
,    Password = "PASSWORD"
,    ApiCredential = "API_CREDENTIAL"
,    Server = "SERVER"
,    Database = "DATABASE"
,    CreditCard = "CREDIT_CARD"
,    Membership = "MEMBERSHIP"
,    Passport = "PASSPORT"
,    SoftwareLicense = "SOFTWARE_LICENSE"
,    OutdoorLicense = "OUTDOOR_LICENSE"
,    SecureNote = "SECURE_NOTE"
,    WirelessRouter = "WIRELESS_ROUTER"
,    BankAccount = "BANK_ACCOUNT"
,    DriverLicense = "DRIVER_LICENSE"
,    Identity = "IDENTITY"
,    RewardProgram = "REWARD_PROGRAM"
,    Document = "DOCUMENT"
,    EmailAccount = "EMAIL_ACCOUNT"
,    SocialSecurityNumber = "SOCIAL_SECURITY_NUMBER"
,    Custom = "CUSTOM"
}

export enum ItemStateEnum {
    Archived = "ARCHIVED"
,    Deleted = "DELETED"
}


export class ItemUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;

  @Metadata({ data: "json, name=primary" })
  primary?: boolean;
}


export class ItemVault extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}


export class Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: ItemCategoryEnum;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=favorite" })
  favorite?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastEditedBy" })
  lastEditedBy?: string;

  @Metadata({ data: "json, name=state" })
  state?: ItemStateEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=urls", elemType: shared.ItemUrls })
  urls?: ItemUrls[];

  @Metadata({ data: "json, name=vault" })
  vault: ItemVault;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
