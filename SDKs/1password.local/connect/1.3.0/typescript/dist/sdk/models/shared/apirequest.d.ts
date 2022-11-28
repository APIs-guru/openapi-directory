import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiRequestActionEnum {
    Read = "READ",
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}
export declare class ApiRequestActor extends SpeakeasyBase {
    account?: string;
    id?: string;
    jti?: string;
    requestIp?: string;
    userAgent?: string;
}
export declare class ApiRequestResourceItem extends SpeakeasyBase {
    id?: string;
}
export declare enum ApiRequestResourceTypeEnum {
    Item = "ITEM",
    Vault = "VAULT"
}
export declare class ApiRequestResourceVault extends SpeakeasyBase {
    id?: string;
}
export declare class ApiRequestResource extends SpeakeasyBase {
    item?: ApiRequestResourceItem;
    itemVersion?: number;
    type?: ApiRequestResourceTypeEnum;
    vault?: ApiRequestResourceVault;
}
export declare enum ApiRequestResultEnum {
    Success = "SUCCESS",
    Deny = "DENY"
}
/**
 * Represents a request that was made to the API. Including what Token was used and what resource was accessed.
**/
export declare class ApiRequest extends SpeakeasyBase {
    action?: ApiRequestActionEnum;
    actor?: ApiRequestActor;
    requestId?: string;
    resource?: ApiRequestResource;
    result?: ApiRequestResultEnum;
    timestamp?: Date;
}
