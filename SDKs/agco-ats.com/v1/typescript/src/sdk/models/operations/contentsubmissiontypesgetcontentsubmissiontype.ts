import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentSubmissionTypesGetContentSubmissionTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ContentSubmissionTypesGetContentSubmissionTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentSubmissionTypesGetContentSubmissionTypePathParams;
}


export class ContentSubmissionTypesGetContentSubmissionTypeResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentSubmissionSharedBusinessEntitiesContentSubmissionType?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
