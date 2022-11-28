import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteVpcEndpointsActionEnum {
    DeleteVpcEndpoints = "DeleteVpcEndpoints"
}
export declare enum PostDeleteVpcEndpointsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteVpcEndpointsQueryParams extends SpeakeasyBase {
    action: PostDeleteVpcEndpointsActionEnum;
    version: PostDeleteVpcEndpointsVersionEnum;
}
export declare class PostDeleteVpcEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteVpcEndpointsRequest extends SpeakeasyBase {
    queryParams: PostDeleteVpcEndpointsQueryParams;
    headers: PostDeleteVpcEndpointsHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteVpcEndpointsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
