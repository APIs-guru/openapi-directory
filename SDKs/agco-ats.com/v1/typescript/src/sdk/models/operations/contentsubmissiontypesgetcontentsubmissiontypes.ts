import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentSubmissionTypesGetContentSubmissionTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=enabled" })
  enabled?: boolean;
}


export class ContentSubmissionTypesGetContentSubmissionTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ContentSubmissionTypesGetContentSubmissionTypesQueryParams;
}


export class ContentSubmissionTypesGetContentSubmissionTypesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata({ elemType: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType })
  contentSubmissionSharedBusinessEntitiesContentSubmissionTypes?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
