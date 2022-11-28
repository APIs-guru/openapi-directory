import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ItemCategoryEnum {
    Login = "LOGIN",
    Password = "PASSWORD",
    ApiCredential = "API_CREDENTIAL",
    Server = "SERVER",
    Database = "DATABASE",
    CreditCard = "CREDIT_CARD",
    Membership = "MEMBERSHIP",
    Passport = "PASSPORT",
    SoftwareLicense = "SOFTWARE_LICENSE",
    OutdoorLicense = "OUTDOOR_LICENSE",
    SecureNote = "SECURE_NOTE",
    WirelessRouter = "WIRELESS_ROUTER",
    BankAccount = "BANK_ACCOUNT",
    DriverLicense = "DRIVER_LICENSE",
    Identity = "IDENTITY",
    RewardProgram = "REWARD_PROGRAM",
    Document = "DOCUMENT",
    EmailAccount = "EMAIL_ACCOUNT",
    SocialSecurityNumber = "SOCIAL_SECURITY_NUMBER",
    Custom = "CUSTOM"
}

export enum ItemStateEnum {
    Archived = "ARCHIVED",
    Deleted = "DELETED"
}


export class ItemUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;
}


export class ItemVault extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: ItemCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=favorite" })
  favorite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastEditedBy" })
  lastEditedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ItemStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=urls", elemType: ItemUrls })
  urls?: ItemUrls[];

  @SpeakeasyMetadata({ data: "json, name=vault" })
  vault: ItemVault;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
