import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDirectoryConfigsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeDirectoryConfigs = "PhotonAdminProxyService.DescribeDirectoryConfigs"
}
export declare class DescribeDirectoryConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDirectoryConfigsXAmzTargetEnum;
}
export declare class DescribeDirectoryConfigsRequest extends SpeakeasyBase {
    headers: DescribeDirectoryConfigsHeaders;
    request: shared.DescribeDirectoryConfigsRequest;
}
export declare class DescribeDirectoryConfigsResponse extends SpeakeasyBase {
    contentType: string;
    describeDirectoryConfigsResult?: shared.DescribeDirectoryConfigsResult;
    resourceNotFoundException?: any;
    statusCode: number;
}
