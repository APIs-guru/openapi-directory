import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Field } from "./field";
import { File } from "./file";
export declare enum FullItemCategoryEnum {
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
export declare class FullItemSections extends SpeakeasyBase {
    id?: string;
    label?: string;
}
export declare enum FullItemStateEnum {
    Archived = "ARCHIVED",
    Deleted = "DELETED"
}
export declare class FullItemUrls extends SpeakeasyBase {
    href: string;
    primary?: boolean;
}
export declare class FullItemVault extends SpeakeasyBase {
    id: string;
}
export declare class FullItem extends SpeakeasyBase {
    category: FullItemCategoryEnum;
    createdAt?: Date;
    favorite?: boolean;
    fields?: Field[];
    files?: File[];
    id?: string;
    lastEditedBy?: string;
    sections?: FullItemSections[];
    state?: FullItemStateEnum;
    tags?: string[];
    title?: string;
    updatedAt?: Date;
    urls?: FullItemUrls[];
    vault: FullItemVault;
    version?: number;
}
