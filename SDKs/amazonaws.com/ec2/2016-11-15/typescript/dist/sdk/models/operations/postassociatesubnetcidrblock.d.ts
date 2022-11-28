import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAssociateSubnetCidrBlockActionEnum {
    AssociateSubnetCidrBlock = "AssociateSubnetCidrBlock"
}
export declare enum PostAssociateSubnetCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssociateSubnetCidrBlockQueryParams extends SpeakeasyBase {
    action: PostAssociateSubnetCidrBlockActionEnum;
    version: PostAssociateSubnetCidrBlockVersionEnum;
}
export declare class PostAssociateSubnetCidrBlockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateSubnetCidrBlockRequest extends SpeakeasyBase {
    queryParams: PostAssociateSubnetCidrBlockQueryParams;
    headers: PostAssociateSubnetCidrBlockHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateSubnetCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
