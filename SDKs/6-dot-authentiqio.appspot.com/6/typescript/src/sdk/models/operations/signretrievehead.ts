import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignRetrieveHeadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=job" })
  job: string;
}


export class SignRetrieveHeadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SignRetrieveHeadPathParams;
}


export class SignRetrieveHeadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;
}
