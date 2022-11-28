import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job" })
  job: string;
}


export class SignDelete200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class SignDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SignDeletePathParams;
}


export class SignDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  signDelete200ApplicationJsonObject?: SignDelete200ApplicationJson;
}
