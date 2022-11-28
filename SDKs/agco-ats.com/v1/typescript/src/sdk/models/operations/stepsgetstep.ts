import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StepsGetStepPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stepID" })
  stepId: number;
}


export class StepsGetStepQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isIncludeDeleted" })
  isIncludeDeleted?: boolean;
}


export class StepsGetStepRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StepsGetStepPathParams;

  @SpeakeasyMetadata()
  queryParams: StepsGetStepQueryParams;
}


export class StepsGetStepResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  buildSystemSharedDtoStep?: shared.BuildSystemSharedDtoStep;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
