import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyBindPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=PK" })
  pk: string;
}


export class KeyBindRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: KeyBindPathParams;

  @Metadata({ data: "request, media_type=application/jwt" })
  request: Uint8Array;
}


export class KeyBind200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class KeyBindResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  keyBind200ApplicationJsonObject?: KeyBind200ApplicationJson;
}
