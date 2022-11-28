import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTestXAmzTargetEnum {
    DeviceFarm20150623GetTest = "DeviceFarm_20150623.GetTest"
}
export declare class GetTestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTestXAmzTargetEnum;
}
export declare class GetTestRequest extends SpeakeasyBase {
    headers: GetTestHeaders;
    request: shared.GetTestRequest;
}
export declare class GetTestResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getTestResult?: shared.GetTestResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
