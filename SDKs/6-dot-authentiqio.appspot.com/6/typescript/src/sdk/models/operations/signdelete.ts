import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=job" })
  job: string;
}


export class SignDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SignDeletePathParams;
}


export class SignDelete200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class SignDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  signDelete200ApplicationJsonObject?: SignDelete200ApplicationJson;
}
