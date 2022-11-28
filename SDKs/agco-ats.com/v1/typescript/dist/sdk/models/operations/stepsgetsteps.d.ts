import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StepsGetStepsQueryParams extends SpeakeasyBase {
    includeDeleted?: boolean;
    limit?: number;
    offset?: number;
}
export declare class StepsGetStepsRequest extends SpeakeasyBase {
    queryParams: StepsGetStepsQueryParams;
}
export declare class StepsGetStepsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseBuildSystemSharedDtoStep?: shared.ApiPagedResponseBuildSystemSharedDtoStep;
    contentType: string;
    statusCode: number;
}
