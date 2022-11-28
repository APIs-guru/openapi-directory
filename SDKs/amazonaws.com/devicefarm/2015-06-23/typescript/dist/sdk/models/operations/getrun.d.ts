import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRunXAmzTargetEnum {
    DeviceFarm20150623GetRun = "DeviceFarm_20150623.GetRun"
}
export declare class GetRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRunXAmzTargetEnum;
}
export declare class GetRunRequest extends SpeakeasyBase {
    headers: GetRunHeaders;
    request: shared.GetRunRequest;
}
export declare class GetRunResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getRunResult?: shared.GetRunResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
