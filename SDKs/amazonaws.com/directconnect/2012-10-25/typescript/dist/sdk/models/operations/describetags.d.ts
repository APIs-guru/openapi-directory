import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTagsXAmzTargetEnum {
    OvertureServiceDescribeTags = "OvertureService.DescribeTags"
}
export declare class DescribeTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTagsXAmzTargetEnum;
}
export declare class DescribeTagsRequest extends SpeakeasyBase {
    headers: DescribeTagsHeaders;
    request: shared.DescribeTagsRequest;
}
export declare class DescribeTagsResponse extends SpeakeasyBase {
    contentType: string;
    describeTagsResponse?: shared.DescribeTagsResponse;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
