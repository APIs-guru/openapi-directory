import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRunXAmzTargetEnum {
    DeviceFarm20150623DeleteRun = "DeviceFarm_20150623.DeleteRun"
}
export declare class DeleteRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRunXAmzTargetEnum;
}
export declare class DeleteRunRequest extends SpeakeasyBase {
    headers: DeleteRunHeaders;
    request: shared.DeleteRunRequest;
}
export declare class DeleteRunResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    deleteRunResult?: Map<string, any>;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
