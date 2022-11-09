import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSubmissionTypesDeleteContentSubmissionTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ContentSubmissionTypesDeleteContentSubmissionTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentSubmissionTypesDeleteContentSubmissionTypePathParams;
}


export class ContentSubmissionTypesDeleteContentSubmissionTypeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
