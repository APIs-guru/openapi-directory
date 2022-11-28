import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job" })
  job: string;
}


export class SignUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SignUpdatePathParams;
}


export class SignUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
