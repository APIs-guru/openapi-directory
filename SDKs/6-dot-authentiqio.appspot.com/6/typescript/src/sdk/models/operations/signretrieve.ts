import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job" })
  job: string;
}


export class SignRetrieveJwt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exp" })
  exp?: number;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=sub" })
  sub?: string;
}


export class SignRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SignRetrievePathParams;
}


export class SignRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  jwt?: SignRetrieveJwt;

  @SpeakeasyMetadata()
  statusCode: number;
}
