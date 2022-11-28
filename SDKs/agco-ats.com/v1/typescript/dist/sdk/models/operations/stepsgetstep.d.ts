import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StepsGetStepPathParams extends SpeakeasyBase {
    stepId: number;
}
export declare class StepsGetStepQueryParams extends SpeakeasyBase {
    isIncludeDeleted?: boolean;
}
export declare class StepsGetStepRequest extends SpeakeasyBase {
    pathParams: StepsGetStepPathParams;
    queryParams: StepsGetStepQueryParams;
}
export declare class StepsGetStepResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    buildSystemSharedDtoStep?: shared.BuildSystemSharedDtoStep;
    contentType: string;
    statusCode: number;
}
