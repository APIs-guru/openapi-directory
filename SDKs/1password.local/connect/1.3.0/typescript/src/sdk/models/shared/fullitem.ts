import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
import { File } from "./file";
import { FieldInput } from "./field";
import { FileInput } from "./file";


export enum FullItemStateEnum {
    Archived = "ARCHIVED",
    Deleted = "DELETED"
}

export enum FullItemCategoryEnum {
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


export class FullItemSections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}


export class FullItemUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;
}


export class FullItemVault extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class FullItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: FullItemCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=favorite" })
  favorite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: Field })
  fields?: Field[];

  @SpeakeasyMetadata({ data: "json, name=files", elemType: File })
  files?: File[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastEditedBy" })
  lastEditedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=sections", elemType: FullItemSections })
  sections?: FullItemSections[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: FullItemStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=urls", elemType: FullItemUrls })
  urls?: FullItemUrls[];

  @SpeakeasyMetadata({ data: "json, name=vault" })
  vault: FullItemVault;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}


export class FullItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: FullItemCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=favorite" })
  favorite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: FieldInput })
  fields?: FieldInput[];

  @SpeakeasyMetadata({ data: "json, name=files", elemType: FileInput })
  files?: FileInput[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=sections", elemType: FullItemSections })
  sections?: FullItemSections[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=urls", elemType: FullItemUrls })
  urls?: FullItemUrls[];

  @SpeakeasyMetadata({ data: "json, name=vault" })
  vault: FullItemVault;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
