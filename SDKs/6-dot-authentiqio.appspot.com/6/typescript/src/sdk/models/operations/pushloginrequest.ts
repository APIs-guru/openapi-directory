import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PushLoginRequestQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback: string;
}


export class PushLoginRequest200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class PushLoginRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PushLoginRequestQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/jwt" })
  request: Uint8Array;
}


export class PushLoginRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pushLoginRequest200ApplicationJsonObject?: PushLoginRequest200ApplicationJson;
}
