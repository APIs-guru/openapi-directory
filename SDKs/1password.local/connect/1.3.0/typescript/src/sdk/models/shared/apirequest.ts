import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApiRequestActionEnum {
    Read = "READ"
,    Create = "CREATE"
,    Update = "UPDATE"
,    Delete = "DELETE"
}


export class ApiRequestActor extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=jti" })
  jti?: string;

  @Metadata({ data: "json, name=requestIp" })
  requestIp?: string;

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: string;
}


export class ApiRequestResourceItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}

export enum ApiRequestResourceTypeEnum {
    Item = "ITEM"
,    Vault = "VAULT"
}


export class ApiRequestResourceVault extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class ApiRequestResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=item" })
  item?: ApiRequestResourceItem;

  @Metadata({ data: "json, name=itemVersion" })
  itemVersion?: number;

  @Metadata({ data: "json, name=type" })
  type?: ApiRequestResourceTypeEnum;

  @Metadata({ data: "json, name=vault" })
  vault?: ApiRequestResourceVault;
}

export enum ApiRequestResultEnum {
    Success = "SUCCESS"
,    Deny = "DENY"
}


// ApiRequest
/** 
 * Represents a request that was made to the API. Including what Token was used and what resource was accessed.
**/
export class ApiRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: ApiRequestActionEnum;

  @Metadata({ data: "json, name=actor" })
  actor?: ApiRequestActor;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: ApiRequestResource;

  @Metadata({ data: "json, name=result" })
  result?: ApiRequestResultEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
