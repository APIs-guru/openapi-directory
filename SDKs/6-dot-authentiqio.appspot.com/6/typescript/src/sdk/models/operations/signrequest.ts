import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignRequestQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=test" })
  test?: number;
}


export class SignRequest201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class SignRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SignRequestQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/jwt" })
  request: Uint8Array;
}


export class SignRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  signRequest201ApplicationJsonObject?: SignRequest201ApplicationJson;
}
