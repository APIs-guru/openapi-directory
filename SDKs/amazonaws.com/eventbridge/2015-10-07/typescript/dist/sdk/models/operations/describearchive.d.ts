import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeArchiveXAmzTargetEnum {
    AwsEventsDescribeArchive = "AWSEvents.DescribeArchive"
}
export declare class DescribeArchiveHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeArchiveXAmzTargetEnum;
}
export declare class DescribeArchiveRequest extends SpeakeasyBase {
    headers: DescribeArchiveHeaders;
    request: shared.DescribeArchiveRequest;
}
export declare class DescribeArchiveResponse extends SpeakeasyBase {
    contentType: string;
    describeArchiveResponse?: shared.DescribeArchiveResponse;
    internalException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
