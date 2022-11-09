import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyRevokePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=PK" })
  pk: string;
}


export class KeyRevokeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=secret" })
  secret: string;
}


export class KeyRevokeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: KeyRevokePathParams;

  @Metadata()
  queryParams: KeyRevokeQueryParams;
}


export class KeyRevoke200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class KeyRevokeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  keyRevoke200ApplicationJsonObject?: KeyRevoke200ApplicationJson;
}
