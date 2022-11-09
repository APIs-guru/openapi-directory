import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum VaultTypeEnum {
    UserCreated = "USER_CREATED",
    Personal = "PERSONAL",
    Everyone = "EVERYONE",
    Transfer = "TRANSFER"
}
export declare class Vault extends SpeakeasyBase {
    attributeVersion?: number;
    contentVersion?: number;
    createdAt?: Date;
    description?: string;
    id?: string;
    items?: number;
    name?: string;
    type?: VaultTypeEnum;
    updatedAt?: Date;
}
