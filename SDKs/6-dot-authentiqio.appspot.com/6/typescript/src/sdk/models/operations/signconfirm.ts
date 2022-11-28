import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignConfirmPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job" })
  job: string;
}


export class SignConfirm202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class SignConfirmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SignConfirmPathParams;
}


export class SignConfirmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  signConfirm202ApplicationJsonObject?: SignConfirm202ApplicationJson;
}
