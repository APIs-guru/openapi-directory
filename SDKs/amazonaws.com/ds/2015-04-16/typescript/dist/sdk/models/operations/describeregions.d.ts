import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeRegionsXAmzTargetEnum {
    DirectoryService20150416DescribeRegions = "DirectoryService_20150416.DescribeRegions"
}
export declare class DescribeRegionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRegionsXAmzTargetEnum;
}
export declare class DescribeRegionsRequest extends SpeakeasyBase {
    headers: DescribeRegionsHeaders;
    request: shared.DescribeRegionsRequest;
}
export declare class DescribeRegionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    contentType: string;
    describeRegionsResult?: shared.DescribeRegionsResult;
    directoryDoesNotExistException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
