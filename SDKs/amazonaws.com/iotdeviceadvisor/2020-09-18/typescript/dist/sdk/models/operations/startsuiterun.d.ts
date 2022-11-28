import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartSuiteRunPathParams extends SpeakeasyBase {
    suiteDefinitionId: string;
}
export declare class StartSuiteRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Gets suite run configuration.
**/
export declare class StartSuiteRunRequestBodySuiteRunConfiguration extends SpeakeasyBase {
    primaryDevice?: shared.DeviceUnderTest;
    selectedTestList?: string[];
}
export declare class StartSuiteRunRequestBody extends SpeakeasyBase {
    suiteDefinitionVersion?: string;
    suiteRunConfiguration?: StartSuiteRunRequestBodySuiteRunConfiguration;
    tags?: Map<string, string>;
}
export declare class StartSuiteRunRequest extends SpeakeasyBase {
    pathParams: StartSuiteRunPathParams;
    headers: StartSuiteRunHeaders;
    request: StartSuiteRunRequestBody;
}
export declare class StartSuiteRunResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    startSuiteRunResponse?: shared.StartSuiteRunResponse;
    statusCode: number;
    validationException?: any;
}
