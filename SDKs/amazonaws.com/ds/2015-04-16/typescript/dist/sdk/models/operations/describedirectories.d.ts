import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDirectoriesXAmzTargetEnum {
    DirectoryService20150416DescribeDirectories = "DirectoryService_20150416.DescribeDirectories"
}
export declare class DescribeDirectoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDirectoriesXAmzTargetEnum;
}
export declare class DescribeDirectoriesRequest extends SpeakeasyBase {
    headers: DescribeDirectoriesHeaders;
    request: shared.DescribeDirectoriesRequest;
}
export declare class DescribeDirectoriesResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeDirectoriesResult?: shared.DescribeDirectoriesResult;
    entityDoesNotExistException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
}
