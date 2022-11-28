import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSuiteRunPathParams extends SpeakeasyBase {
    suiteDefinitionId: string;
    suiteRunId: string;
}
export declare class GetSuiteRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSuiteRunRequest extends SpeakeasyBase {
    pathParams: GetSuiteRunPathParams;
    headers: GetSuiteRunHeaders;
}
export declare class GetSuiteRunResponse extends SpeakeasyBase {
    contentType: string;
    getSuiteRunResponse?: shared.GetSuiteRunResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
