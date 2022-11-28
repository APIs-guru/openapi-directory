import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopSuiteRunPathParams extends SpeakeasyBase {
    suiteDefinitionId: string;
    suiteRunId: string;
}
export declare class StopSuiteRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopSuiteRunRequest extends SpeakeasyBase {
    pathParams: StopSuiteRunPathParams;
    headers: StopSuiteRunHeaders;
}
export declare class StopSuiteRunResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopSuiteRunResponse?: Map<string, any>;
    validationException?: any;
}
