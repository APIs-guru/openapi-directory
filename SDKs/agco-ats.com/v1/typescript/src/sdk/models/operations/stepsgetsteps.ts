import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StepsGetStepsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" })
  includeDeleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class StepsGetStepsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StepsGetStepsQueryParams;
}


export class StepsGetStepsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseBuildSystemSharedDtoStep?: shared.ApiPagedResponseBuildSystemSharedDtoStep;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
