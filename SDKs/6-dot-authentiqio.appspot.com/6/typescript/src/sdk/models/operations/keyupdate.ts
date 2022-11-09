import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=PK" })
  pk: string;
}


export class KeyUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: KeyUpdatePathParams;

  @Metadata({ data: "request, media_type=application/jwt" })
  request: Uint8Array;
}


export class KeyUpdate200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class KeyUpdateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  keyUpdate200ApplicationJsonObject?: KeyUpdate200ApplicationJson;
}
