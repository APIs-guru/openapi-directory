import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StopExperimentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StopExperimentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopExperimentRequest extends SpeakeasyBase {
    pathParams: StopExperimentPathParams;
    headers: StopExperimentHeaders;
}
export declare class StopExperimentResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    stopExperimentResponse?: shared.StopExperimentResponse;
    validationException?: any;
}
