import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeProjectPathParams extends SpeakeasyBase {
    projectName: string;
}
export declare class DescribeProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeProjectRequest extends SpeakeasyBase {
    pathParams: DescribeProjectPathParams;
    headers: DescribeProjectHeaders;
}
export declare class DescribeProjectResponse extends SpeakeasyBase {
    contentType: string;
    describeProjectResponse?: shared.DescribeProjectResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
