import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetExperimentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetExperimentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetExperimentRequest extends SpeakeasyBase {
    pathParams: GetExperimentPathParams;
    headers: GetExperimentHeaders;
}
export declare class GetExperimentResponse extends SpeakeasyBase {
    contentType: string;
    getExperimentResponse?: shared.GetExperimentResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
