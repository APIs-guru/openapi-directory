import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateSnapshotXAmzTargetEnum {
    DirectoryService20150416CreateSnapshot = "DirectoryService_20150416.CreateSnapshot"
}
export declare class CreateSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSnapshotXAmzTargetEnum;
}
export declare class CreateSnapshotRequest extends SpeakeasyBase {
    headers: CreateSnapshotHeaders;
    request: shared.CreateSnapshotRequest;
}
export declare class CreateSnapshotResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createSnapshotResult?: shared.CreateSnapshotResult;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    snapshotLimitExceededException?: any;
    statusCode: number;
}
