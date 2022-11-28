import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateVpcActionEnum {
    CreateVpc = "CreateVpc"
}
export declare enum PostCreateVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateVpcQueryParams extends SpeakeasyBase {
    action: PostCreateVpcActionEnum;
    version: PostCreateVpcVersionEnum;
}
export declare class PostCreateVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateVpcRequest extends SpeakeasyBase {
    queryParams: PostCreateVpcQueryParams;
    headers: PostCreateVpcHeaders;
    request?: Uint8Array;
}
export declare class PostCreateVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
