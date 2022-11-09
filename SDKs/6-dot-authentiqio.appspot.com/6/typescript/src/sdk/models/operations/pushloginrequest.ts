import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PushLoginRequestQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback: string;
}


export class PushLoginRequestRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PushLoginRequestQueryParams;

  @Metadata({ data: "request, media_type=application/jwt" })
  request: Uint8Array;
}


export class PushLoginRequest200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class PushLoginRequestResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  pushLoginRequest200ApplicationJsonObject?: PushLoginRequest200ApplicationJson;
}
