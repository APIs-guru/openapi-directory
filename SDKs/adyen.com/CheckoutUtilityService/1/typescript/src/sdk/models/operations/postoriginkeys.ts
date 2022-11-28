import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostOriginKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostOriginKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkoutUtilityResponse?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
