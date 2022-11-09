import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteSnapshotXAmzTargetEnum {
    DirectoryService20150416DeleteSnapshot = "DirectoryService_20150416.DeleteSnapshot"
}
export declare class DeleteSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSnapshotXAmzTargetEnum;
}
export declare class DeleteSnapshotRequest extends SpeakeasyBase {
    headers: DeleteSnapshotHeaders;
    request: shared.DeleteSnapshotRequest;
}
export declare class DeleteSnapshotResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteSnapshotResult?: shared.DeleteSnapshotResult;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
}
