import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyRevokePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PK" })
  pk: string;
}


export class KeyRevokeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secret" })
  secret: string;
}


export class KeyRevoke200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class KeyRevokeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: KeyRevokePathParams;

  @SpeakeasyMetadata()
  queryParams: KeyRevokeQueryParams;
}


export class KeyRevokeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  keyRevoke200ApplicationJsonObject?: KeyRevoke200ApplicationJson;
}
