import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeConditionalForwardersXAmzTargetEnum {
    DirectoryService20150416DescribeConditionalForwarders = "DirectoryService_20150416.DescribeConditionalForwarders"
}
export declare class DescribeConditionalForwardersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConditionalForwardersXAmzTargetEnum;
}
export declare class DescribeConditionalForwardersRequest extends SpeakeasyBase {
    headers: DescribeConditionalForwardersHeaders;
    request: shared.DescribeConditionalForwardersRequest;
}
export declare class DescribeConditionalForwardersResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeConditionalForwardersResult?: shared.DescribeConditionalForwardersResult;
    directoryUnavailableException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
