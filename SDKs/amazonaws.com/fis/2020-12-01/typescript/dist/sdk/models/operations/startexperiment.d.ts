import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StartExperimentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartExperimentRequestBody extends SpeakeasyBase {
    clientToken: string;
    experimentTemplateId: string;
    tags?: Map<string, string>;
}
export declare class StartExperimentRequest extends SpeakeasyBase {
    headers: StartExperimentHeaders;
    request: StartExperimentRequestBody;
}
export declare class StartExperimentResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    startExperimentResponse?: shared.StartExperimentResponse;
    statusCode: number;
    validationException?: any;
}
