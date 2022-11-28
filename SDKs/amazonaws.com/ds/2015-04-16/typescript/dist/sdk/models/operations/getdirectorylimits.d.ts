import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDirectoryLimitsXAmzTargetEnum {
    DirectoryService20150416GetDirectoryLimits = "DirectoryService_20150416.GetDirectoryLimits"
}
export declare class GetDirectoryLimitsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDirectoryLimitsXAmzTargetEnum;
}
export declare class GetDirectoryLimitsRequest extends SpeakeasyBase {
    headers: GetDirectoryLimitsHeaders;
    request: Map<string, any>;
}
export declare class GetDirectoryLimitsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    getDirectoryLimitsResult?: shared.GetDirectoryLimitsResult;
    serviceException?: any;
    statusCode: number;
}
