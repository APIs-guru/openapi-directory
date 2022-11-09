import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignConfirmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=job" })
  job: string;
}


export class SignConfirmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SignConfirmPathParams;
}


export class SignConfirm202ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class SignConfirmResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  signConfirm202ApplicationJsonObject?: SignConfirm202ApplicationJson;
}
