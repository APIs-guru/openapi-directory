import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutAppsListXAmzTargetEnum {
    Awsfms20180101PutAppsList = "AWSFMS_20180101.PutAppsList"
}
export declare class PutAppsListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAppsListXAmzTargetEnum;
}
export declare class PutAppsListRequest extends SpeakeasyBase {
    headers: PutAppsListHeaders;
    request: shared.PutAppsListRequest;
}
export declare class PutAppsListResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidInputException?: any;
    invalidOperationException?: any;
    limitExceededException?: any;
    putAppsListResponse?: shared.PutAppsListResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
