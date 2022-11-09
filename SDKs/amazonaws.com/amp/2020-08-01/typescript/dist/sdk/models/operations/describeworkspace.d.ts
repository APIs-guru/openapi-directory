import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeWorkspacePathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class DescribeWorkspaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeWorkspaceRequest extends SpeakeasyBase {
    pathParams: DescribeWorkspacePathParams;
    headers: DescribeWorkspaceHeaders;
}
export declare class DescribeWorkspaceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeWorkspaceResponse?: shared.DescribeWorkspaceResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
