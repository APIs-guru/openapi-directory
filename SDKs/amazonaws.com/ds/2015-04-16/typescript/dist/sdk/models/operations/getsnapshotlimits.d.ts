import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetSnapshotLimitsXAmzTargetEnum {
    DirectoryService20150416GetSnapshotLimits = "DirectoryService_20150416.GetSnapshotLimits"
}
export declare class GetSnapshotLimitsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSnapshotLimitsXAmzTargetEnum;
}
export declare class GetSnapshotLimitsRequest extends SpeakeasyBase {
    headers: GetSnapshotLimitsHeaders;
    request: shared.GetSnapshotLimitsRequest;
}
export declare class GetSnapshotLimitsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    getSnapshotLimitsResult?: shared.GetSnapshotLimitsResult;
    serviceException?: any;
    statusCode: number;
}
