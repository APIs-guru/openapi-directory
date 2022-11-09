import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentSubmissionsGetContentSubmissionAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionID" })
  contentSubmissionId: number;
}


export class ContentSubmissionsGetContentSubmissionAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ContentSubmissionsGetContentSubmissionAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentSubmissionsGetContentSubmissionAttributesPathParams;

  @Metadata()
  queryParams: ContentSubmissionsGetContentSubmissionAttributesQueryParams;
}


export class ContentSubmissionsGetContentSubmissionAttributesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
