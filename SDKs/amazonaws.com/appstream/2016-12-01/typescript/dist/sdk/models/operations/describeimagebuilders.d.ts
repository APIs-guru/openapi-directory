import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeImageBuildersXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeImageBuilders = "PhotonAdminProxyService.DescribeImageBuilders"
}
export declare class DescribeImageBuildersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImageBuildersXAmzTargetEnum;
}
export declare class DescribeImageBuildersRequest extends SpeakeasyBase {
    headers: DescribeImageBuildersHeaders;
    request: shared.DescribeImageBuildersRequest;
}
export declare class DescribeImageBuildersResponse extends SpeakeasyBase {
    contentType: string;
    describeImageBuildersResult?: shared.DescribeImageBuildersResult;
    resourceNotFoundException?: any;
    statusCode: number;
}
