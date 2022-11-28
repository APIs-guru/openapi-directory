import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentSubmissionTypesGetContentSubmissionTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enabled" })
  enabled?: boolean;
}


export class ContentSubmissionTypesGetContentSubmissionTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ContentSubmissionTypesGetContentSubmissionTypesQueryParams;
}


export class ContentSubmissionTypesGetContentSubmissionTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata({ elemType: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType })
  contentSubmissionSharedBusinessEntitiesContentSubmissionTypes?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
