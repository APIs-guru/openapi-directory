import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StepsGetStepPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=stepID" })
  stepId: number;
}


export class StepsGetStepQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isIncludeDeleted" })
  isIncludeDeleted?: boolean;
}


export class StepsGetStepRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StepsGetStepPathParams;

  @Metadata()
  queryParams: StepsGetStepQueryParams;
}


export class StepsGetStepResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  buildSystemSharedDtoStep?: shared.BuildSystemSharedDtoStep;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
