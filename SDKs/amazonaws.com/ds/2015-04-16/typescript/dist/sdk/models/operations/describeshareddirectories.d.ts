import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeSharedDirectoriesXAmzTargetEnum {
    DirectoryService20150416DescribeSharedDirectories = "DirectoryService_20150416.DescribeSharedDirectories"
}
export declare class DescribeSharedDirectoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSharedDirectoriesXAmzTargetEnum;
}
export declare class DescribeSharedDirectoriesRequest extends SpeakeasyBase {
    headers: DescribeSharedDirectoriesHeaders;
    request: shared.DescribeSharedDirectoriesRequest;
}
export declare class DescribeSharedDirectoriesResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeSharedDirectoriesResult?: shared.DescribeSharedDirectoriesResult;
    entityDoesNotExistException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
