import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyRevokeNosecretQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=phone" })
  phone: string;
}


export class KeyRevokeNosecretRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: KeyRevokeNosecretQueryParams;
}


export class KeyRevokeNosecret200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class KeyRevokeNosecretResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  keyRevokeNosecret200ApplicationJsonObject?: KeyRevokeNosecret200ApplicationJson;
}
