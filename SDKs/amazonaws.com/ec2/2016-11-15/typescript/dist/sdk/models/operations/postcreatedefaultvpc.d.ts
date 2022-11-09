import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateDefaultVpcActionEnum {
    CreateDefaultVpc = "CreateDefaultVpc"
}
export declare enum PostCreateDefaultVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateDefaultVpcQueryParams extends SpeakeasyBase {
    action: PostCreateDefaultVpcActionEnum;
    version: PostCreateDefaultVpcVersionEnum;
}
export declare class PostCreateDefaultVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDefaultVpcRequest extends SpeakeasyBase {
    queryParams: PostCreateDefaultVpcQueryParams;
    headers: PostCreateDefaultVpcHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDefaultVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
