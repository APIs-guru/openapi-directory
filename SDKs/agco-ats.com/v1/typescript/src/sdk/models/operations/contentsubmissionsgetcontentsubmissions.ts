import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentSubmissionsGetContentSubmissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=contentDefinitionID" })
  contentDefinitionId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" })
  includeAttributes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDefinition" })
  includeDefinition?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=releaseID" })
  releaseId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=typeID" })
  typeId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userID" })
  userId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: number;
}


export class ContentSubmissionsGetContentSubmissionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ContentSubmissionsGetContentSubmissionsQueryParams;
}


export class ContentSubmissionsGetContentSubmissionsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
