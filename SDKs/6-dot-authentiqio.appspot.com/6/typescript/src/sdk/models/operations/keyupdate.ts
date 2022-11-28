import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PK" })
  pk: string;
}


export class KeyUpdate200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class KeyUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: KeyUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/jwt" })
  request: Uint8Array;
}


export class KeyUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  keyUpdate200ApplicationJsonObject?: KeyUpdate200ApplicationJson;
}
