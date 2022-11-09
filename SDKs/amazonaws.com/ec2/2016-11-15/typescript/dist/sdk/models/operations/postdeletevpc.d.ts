import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteVpcActionEnum {
    DeleteVpc = "DeleteVpc"
}
export declare enum PostDeleteVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteVpcQueryParams extends SpeakeasyBase {
    action: PostDeleteVpcActionEnum;
    version: PostDeleteVpcVersionEnum;
}
export declare class PostDeleteVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteVpcRequest extends SpeakeasyBase {
    queryParams: PostDeleteVpcQueryParams;
    headers: PostDeleteVpcHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteVpcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
