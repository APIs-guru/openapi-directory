import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentSubmissionTypesGetContentSubmissionTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ContentSubmissionTypesGetContentSubmissionTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentSubmissionTypesGetContentSubmissionTypePathParams;
}


export class ContentSubmissionTypesGetContentSubmissionTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentSubmissionSharedBusinessEntitiesContentSubmissionType?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
