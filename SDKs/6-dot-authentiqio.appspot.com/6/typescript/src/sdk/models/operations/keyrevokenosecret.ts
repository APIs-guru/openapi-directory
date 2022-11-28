import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyRevokeNosecretQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phone" })
  phone: string;
}


export class KeyRevokeNosecret200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class KeyRevokeNosecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: KeyRevokeNosecretQueryParams;
}


export class KeyRevokeNosecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  keyRevokeNosecret200ApplicationJsonObject?: KeyRevokeNosecret200ApplicationJson;
}
