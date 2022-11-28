import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisassociateVpcCidrBlockActionEnum {
    DisassociateVpcCidrBlock = "DisassociateVpcCidrBlock"
}
export declare enum PostDisassociateVpcCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisassociateVpcCidrBlockQueryParams extends SpeakeasyBase {
    action: PostDisassociateVpcCidrBlockActionEnum;
    version: PostDisassociateVpcCidrBlockVersionEnum;
}
export declare class PostDisassociateVpcCidrBlockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateVpcCidrBlockRequest extends SpeakeasyBase {
    queryParams: PostDisassociateVpcCidrBlockQueryParams;
    headers: PostDisassociateVpcCidrBlockHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateVpcCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
