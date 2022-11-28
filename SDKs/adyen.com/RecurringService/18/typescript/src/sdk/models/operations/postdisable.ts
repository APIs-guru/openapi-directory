import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostDisableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostDisableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  disableResult?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
