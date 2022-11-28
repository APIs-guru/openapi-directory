import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignRetrieveHeadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job" })
  job: string;
}


export class SignRetrieveHeadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SignRetrieveHeadPathParams;
}


export class SignRetrieveHeadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
