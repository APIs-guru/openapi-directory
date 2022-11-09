import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeUsersXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeUsers = "PhotonAdminProxyService.DescribeUsers"
}
export declare class DescribeUsersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUsersXAmzTargetEnum;
}
export declare class DescribeUsersRequest extends SpeakeasyBase {
    headers: DescribeUsersHeaders;
    request: shared.DescribeUsersRequest;
}
export declare class DescribeUsersResponse extends SpeakeasyBase {
    contentType: string;
    describeUsersResult?: shared.DescribeUsersResult;
    invalidParameterCombinationException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
