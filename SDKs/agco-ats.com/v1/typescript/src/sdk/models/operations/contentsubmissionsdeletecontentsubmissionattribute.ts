import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSubmissionsDeleteContentSubmissionAttributePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionAttributeID" })
  contentSubmissionAttributeId: number;
}


export class ContentSubmissionsDeleteContentSubmissionAttributeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentSubmissionsDeleteContentSubmissionAttributePathParams;
}


export class ContentSubmissionsDeleteContentSubmissionAttributeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
