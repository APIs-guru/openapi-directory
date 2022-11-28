import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiRequestActionEnum {
    Read = "READ",
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}


export class ApiRequestActor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jti" })
  jti?: string;

  @SpeakeasyMetadata({ data: "json, name=requestIp" })
  requestIp?: string;

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: string;
}


export class ApiRequestResourceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export enum ApiRequestResourceTypeEnum {
    Item = "ITEM",
    Vault = "VAULT"
}


export class ApiRequestResourceVault extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class ApiRequestResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: ApiRequestResourceItem;

  @SpeakeasyMetadata({ data: "json, name=itemVersion" })
  itemVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ApiRequestResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vault" })
  vault?: ApiRequestResourceVault;
}

export enum ApiRequestResultEnum {
    Success = "SUCCESS",
    Deny = "DENY"
}


// ApiRequest
/** 
 * Represents a request that was made to the API. Including what Token was used and what resource was accessed.
**/
export class ApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: ApiRequestActionEnum;

  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor?: ApiRequestActor;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: ApiRequestResource;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: ApiRequestResultEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
