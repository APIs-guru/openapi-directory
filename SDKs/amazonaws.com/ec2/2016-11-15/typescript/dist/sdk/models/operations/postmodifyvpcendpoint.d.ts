import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyVpcEndpointActionEnum {
    ModifyVpcEndpoint = "ModifyVpcEndpoint"
}
export declare enum PostModifyVpcEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyVpcEndpointQueryParams extends SpeakeasyBase {
    action: PostModifyVpcEndpointActionEnum;
    version: PostModifyVpcEndpointVersionEnum;
}
export declare class PostModifyVpcEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyVpcEndpointRequest extends SpeakeasyBase {
    queryParams: PostModifyVpcEndpointQueryParams;
    headers: PostModifyVpcEndpointHeaders;
    request?: Uint8Array;
}
export declare class PostModifyVpcEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
