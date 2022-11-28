import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSuiteXAmzTargetEnum {
    DeviceFarm20150623GetSuite = "DeviceFarm_20150623.GetSuite"
}
export declare class GetSuiteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSuiteXAmzTargetEnum;
}
export declare class GetSuiteRequest extends SpeakeasyBase {
    headers: GetSuiteHeaders;
    request: shared.GetSuiteRequest;
}
export declare class GetSuiteResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getSuiteResult?: shared.GetSuiteResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
