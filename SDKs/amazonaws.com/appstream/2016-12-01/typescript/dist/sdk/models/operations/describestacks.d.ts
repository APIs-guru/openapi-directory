import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeStacksXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeStacks = "PhotonAdminProxyService.DescribeStacks"
}
export declare class DescribeStacksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStacksXAmzTargetEnum;
}
export declare class DescribeStacksRequest extends SpeakeasyBase {
    headers: DescribeStacksHeaders;
    request: shared.DescribeStacksRequest;
}
export declare class DescribeStacksResponse extends SpeakeasyBase {
    contentType: string;
    describeStacksResult?: shared.DescribeStacksResult;
    resourceNotFoundException?: any;
    statusCode: number;
}
