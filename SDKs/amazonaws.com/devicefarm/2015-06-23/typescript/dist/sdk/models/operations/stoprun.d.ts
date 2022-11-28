import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopRunXAmzTargetEnum {
    DeviceFarm20150623StopRun = "DeviceFarm_20150623.StopRun"
}
export declare class StopRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopRunXAmzTargetEnum;
}
export declare class StopRunRequest extends SpeakeasyBase {
    headers: StopRunHeaders;
    request: shared.StopRunRequest;
}
export declare class StopRunResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
    stopRunResult?: shared.StopRunResult;
}
