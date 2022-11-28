import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFileSystemPolicyPathParams extends SpeakeasyBase {
    fileSystemId: string;
}
export declare class DescribeFileSystemPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFileSystemPolicyRequest extends SpeakeasyBase {
    pathParams: DescribeFileSystemPolicyPathParams;
    headers: DescribeFileSystemPolicyHeaders;
}
export declare class DescribeFileSystemPolicyResponse extends SpeakeasyBase {
    contentType: string;
    fileSystemNotFound?: any;
    fileSystemPolicyDescription?: shared.FileSystemPolicyDescription;
    internalServerError?: any;
    policyNotFound?: any;
    statusCode: number;
}
