import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostMoveAddressToVpcActionEnum {
    MoveAddressToVpc = "MoveAddressToVpc"
}
export declare enum PostMoveAddressToVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostMoveAddressToVpcQueryParams extends SpeakeasyBase {
    action: PostMoveAddressToVpcActionEnum;
    version: PostMoveAddressToVpcVersionEnum;
}
export declare class PostMoveAddressToVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostMoveAddressToVpcRequest extends SpeakeasyBase {
    queryParams: PostMoveAddressToVpcQueryParams;
    headers: PostMoveAddressToVpcHeaders;
    request?: Uint8Array;
}
export declare class PostMoveAddressToVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
