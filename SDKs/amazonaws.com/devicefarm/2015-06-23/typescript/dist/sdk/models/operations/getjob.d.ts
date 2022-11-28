import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetJobXAmzTargetEnum {
    DeviceFarm20150623GetJob = "DeviceFarm_20150623.GetJob"
}
export declare class GetJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetJobXAmzTargetEnum;
}
export declare class GetJobRequest extends SpeakeasyBase {
    headers: GetJobHeaders;
    request: shared.GetJobRequest;
}
export declare class GetJobResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getJobResult?: shared.GetJobResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
