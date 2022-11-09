import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Field } from "./field";
import { File } from "./file";

export enum FullItemCategoryEnum {
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


export class FullItemSections extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;
}

export enum FullItemStateEnum {
    Archived = "ARCHIVED"
,    Deleted = "DELETED"
}


export class FullItemUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;

  @Metadata({ data: "json, name=primary" })
  primary?: boolean;
}


export class FullItemVault extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}


export class FullItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: FullItemCategoryEnum;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=favorite" })
  favorite?: boolean;

  @Metadata({ data: "json, name=fields", elemType: shared.Field })
  fields?: Field[];

  @Metadata({ data: "json, name=files", elemType: shared.File })
  files?: File[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastEditedBy" })
  lastEditedBy?: string;

  @Metadata({ data: "json, name=sections", elemType: shared.FullItemSections })
  sections?: FullItemSections[];

  @Metadata({ data: "json, name=state" })
  state?: FullItemStateEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=urls", elemType: shared.FullItemUrls })
  urls?: FullItemUrls[];

  @Metadata({ data: "json, name=vault" })
  vault: FullItemVault;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
