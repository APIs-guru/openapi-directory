import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSubmissionsDeleteContentSubmissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionID" })
  contentSubmissionId: number;
}


export class ContentSubmissionsDeleteContentSubmissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentSubmissionsDeleteContentSubmissionPathParams;
}


export class ContentSubmissionsDeleteContentSubmissionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
