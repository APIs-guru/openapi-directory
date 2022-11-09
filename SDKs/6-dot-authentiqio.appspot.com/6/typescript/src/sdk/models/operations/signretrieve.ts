import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignRetrievePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=job" })
  job: string;
}


export class SignRetrieveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SignRetrievePathParams;
}


export class SignRetrieveJwt extends SpeakeasyBase {
  @Metadata({ data: "json, name=exp" })
  exp?: number;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=sub" })
  sub?: string;
}


export class SignRetrieveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  jwt?: SignRetrieveJwt;

  @Metadata()
  statusCode: number;
}
