import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostListRecurringDetailsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostListRecurringDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  recurringDetailsResult?: any;

  @Metadata()
  statusCode: number;
}
