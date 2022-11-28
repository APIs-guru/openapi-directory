import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopJobXAmzTargetEnum {
    DeviceFarm20150623StopJob = "DeviceFarm_20150623.StopJob"
}
export declare class StopJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopJobXAmzTargetEnum;
}
export declare class StopJobRequest extends SpeakeasyBase {
    headers: StopJobHeaders;
    request: shared.StopJobRequest;
}
export declare class StopJobResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
    stopJobResult?: shared.StopJobResult;
}
