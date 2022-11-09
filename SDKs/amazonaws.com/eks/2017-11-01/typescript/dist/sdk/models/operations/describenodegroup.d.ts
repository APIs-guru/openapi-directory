import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeNodegroupPathParams extends SpeakeasyBase {
    name: string;
    nodegroupName: string;
}
export declare class DescribeNodegroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeNodegroupRequest extends SpeakeasyBase {
    pathParams: DescribeNodegroupPathParams;
    headers: DescribeNodegroupHeaders;
}
export declare class DescribeNodegroupResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeNodegroupResponse?: shared.DescribeNodegroupResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
