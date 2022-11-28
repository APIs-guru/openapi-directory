import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyBindPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PK" })
  pk: string;
}


export class KeyBind200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class KeyBindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: KeyBindPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/jwt" })
  request: Uint8Array;
}


export class KeyBindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  keyBind200ApplicationJsonObject?: KeyBind200ApplicationJson;
}
