import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeVirtualNodePathParams extends SpeakeasyBase {
    meshName: string;
    virtualNodeName: string;
}
export declare class DescribeVirtualNodeQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class DescribeVirtualNodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeVirtualNodeRequest extends SpeakeasyBase {
    pathParams: DescribeVirtualNodePathParams;
    queryParams: DescribeVirtualNodeQueryParams;
    headers: DescribeVirtualNodeHeaders;
}
export declare class DescribeVirtualNodeResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    describeVirtualNodeOutput?: shared.DescribeVirtualNodeOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
