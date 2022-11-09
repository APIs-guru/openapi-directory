import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostDisableRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostDisableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disableResult?: any;

  @Metadata()
  statusCode: number;
}
