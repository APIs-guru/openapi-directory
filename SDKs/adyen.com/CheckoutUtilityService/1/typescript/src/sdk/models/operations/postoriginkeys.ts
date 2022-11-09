import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostOriginKeysRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostOriginKeysResponse extends SpeakeasyBase {
  @Metadata()
  checkoutUtilityResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
