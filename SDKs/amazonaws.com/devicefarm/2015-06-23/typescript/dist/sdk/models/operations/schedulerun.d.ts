import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ScheduleRunXAmzTargetEnum {
    DeviceFarm20150623ScheduleRun = "DeviceFarm_20150623.ScheduleRun"
}
export declare class ScheduleRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ScheduleRunXAmzTargetEnum;
}
export declare class ScheduleRunRequest extends SpeakeasyBase {
    headers: ScheduleRunHeaders;
    request: shared.ScheduleRunRequest;
}
export declare class ScheduleRunResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    idempotencyException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    scheduleRunResult?: shared.ScheduleRunResult;
    serviceAccountException?: any;
    statusCode: number;
}
