import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSuiteDefinitionPathParams extends SpeakeasyBase {
    suiteDefinitionId: string;
}
export declare class GetSuiteDefinitionQueryParams extends SpeakeasyBase {
    suiteDefinitionVersion?: string;
}
export declare class GetSuiteDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSuiteDefinitionRequest extends SpeakeasyBase {
    pathParams: GetSuiteDefinitionPathParams;
    queryParams: GetSuiteDefinitionQueryParams;
    headers: GetSuiteDefinitionHeaders;
}
export declare class GetSuiteDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    getSuiteDefinitionResponse?: shared.GetSuiteDefinitionResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
