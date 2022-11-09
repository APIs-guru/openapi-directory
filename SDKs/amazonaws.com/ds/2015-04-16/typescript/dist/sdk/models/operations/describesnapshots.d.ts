import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeSnapshotsXAmzTargetEnum {
    DirectoryService20150416DescribeSnapshots = "DirectoryService_20150416.DescribeSnapshots"
}
export declare class DescribeSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSnapshotsXAmzTargetEnum;
}
export declare class DescribeSnapshotsRequest extends SpeakeasyBase {
    headers: DescribeSnapshotsHeaders;
    request: shared.DescribeSnapshotsRequest;
}
export declare class DescribeSnapshotsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeSnapshotsResult?: shared.DescribeSnapshotsResult;
    entityDoesNotExistException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
}
