import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateVpcEndpointActionEnum {
    CreateVpcEndpoint = "CreateVpcEndpoint"
}
export declare enum PostCreateVpcEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateVpcEndpointQueryParams extends SpeakeasyBase {
    action: PostCreateVpcEndpointActionEnum;
    version: PostCreateVpcEndpointVersionEnum;
}
export declare class PostCreateVpcEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateVpcEndpointRequest extends SpeakeasyBase {
    queryParams: PostCreateVpcEndpointQueryParams;
    headers: PostCreateVpcEndpointHeaders;
    request?: Uint8Array;
}
export declare class PostCreateVpcEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
