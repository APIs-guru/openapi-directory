import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostListRecurringDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostListRecurringDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  recurringDetailsResult?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
