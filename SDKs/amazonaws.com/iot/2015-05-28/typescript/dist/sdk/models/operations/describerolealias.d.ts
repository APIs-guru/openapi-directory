import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeRoleAliasPathParams extends SpeakeasyBase {
    roleAlias: string;
}
export declare class DescribeRoleAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeRoleAliasRequest extends SpeakeasyBase {
    pathParams: DescribeRoleAliasPathParams;
    headers: DescribeRoleAliasHeaders;
}
export declare class DescribeRoleAliasResponse extends SpeakeasyBase {
    contentType: string;
    describeRoleAliasResponse?: shared.DescribeRoleAliasResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
