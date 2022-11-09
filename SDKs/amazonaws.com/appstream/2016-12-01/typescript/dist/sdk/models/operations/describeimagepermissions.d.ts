import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeImagePermissionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeImagePermissionsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeImagePermissions = "PhotonAdminProxyService.DescribeImagePermissions"
}
export declare class DescribeImagePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImagePermissionsXAmzTargetEnum;
}
export declare class DescribeImagePermissionsRequest extends SpeakeasyBase {
    queryParams: DescribeImagePermissionsQueryParams;
    headers: DescribeImagePermissionsHeaders;
    request: shared.DescribeImagePermissionsRequest;
}
export declare class DescribeImagePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    describeImagePermissionsResult?: shared.DescribeImagePermissionsResult;
    resourceNotFoundException?: any;
    statusCode: number;
}
