import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ItemCategoryEnum {
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
export declare enum ItemStateEnum {
    Archived = "ARCHIVED",
    Deleted = "DELETED"
}
export declare class ItemUrls extends SpeakeasyBase {
    href: string;
    primary?: boolean;
}
export declare class ItemVault extends SpeakeasyBase {
    id: string;
}
export declare class Item extends SpeakeasyBase {
    category: ItemCategoryEnum;
    createdAt?: Date;
    favorite?: boolean;
    id?: string;
    lastEditedBy?: string;
    state?: ItemStateEnum;
    tags?: string[];
    title?: string;
    updatedAt?: Date;
    urls?: ItemUrls[];
    vault: ItemVault;
    version?: number;
}
