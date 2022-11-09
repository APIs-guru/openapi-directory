import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RestoreFromSnapshotXAmzTargetEnum {
    DirectoryService20150416RestoreFromSnapshot = "DirectoryService_20150416.RestoreFromSnapshot"
}
export declare class RestoreFromSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreFromSnapshotXAmzTargetEnum;
}
export declare class RestoreFromSnapshotRequest extends SpeakeasyBase {
    headers: RestoreFromSnapshotHeaders;
    request: shared.RestoreFromSnapshotRequest;
}
export declare class RestoreFromSnapshotResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    restoreFromSnapshotResult?: Map<string, any>;
    serviceException?: any;
    statusCode: number;
}
