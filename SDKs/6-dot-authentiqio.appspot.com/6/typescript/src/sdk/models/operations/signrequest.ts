import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignRequestQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=test" })
  test?: number;
}


export class SignRequestRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SignRequestQueryParams;

  @Metadata({ data: "request, media_type=application/jwt" })
  request: Uint8Array;
}


export class SignRequest201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class SignRequestResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  signRequest201ApplicationJsonObject?: SignRequest201ApplicationJson;
}
