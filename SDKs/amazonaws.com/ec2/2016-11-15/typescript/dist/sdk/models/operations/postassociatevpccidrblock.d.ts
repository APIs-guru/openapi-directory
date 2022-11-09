import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAssociateVpcCidrBlockActionEnum {
    AssociateVpcCidrBlock = "AssociateVpcCidrBlock"
}
export declare enum PostAssociateVpcCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssociateVpcCidrBlockQueryParams extends SpeakeasyBase {
    action: PostAssociateVpcCidrBlockActionEnum;
    version: PostAssociateVpcCidrBlockVersionEnum;
}
export declare class PostAssociateVpcCidrBlockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateVpcCidrBlockRequest extends SpeakeasyBase {
    queryParams: PostAssociateVpcCidrBlockQueryParams;
    headers: PostAssociateVpcCidrBlockHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateVpcCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
