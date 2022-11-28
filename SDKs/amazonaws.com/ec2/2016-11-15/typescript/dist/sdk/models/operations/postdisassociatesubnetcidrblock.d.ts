import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisassociateSubnetCidrBlockActionEnum {
    DisassociateSubnetCidrBlock = "DisassociateSubnetCidrBlock"
}
export declare enum PostDisassociateSubnetCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisassociateSubnetCidrBlockQueryParams extends SpeakeasyBase {
    action: PostDisassociateSubnetCidrBlockActionEnum;
    version: PostDisassociateSubnetCidrBlockVersionEnum;
}
export declare class PostDisassociateSubnetCidrBlockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateSubnetCidrBlockRequest extends SpeakeasyBase {
    queryParams: PostDisassociateSubnetCidrBlockQueryParams;
    headers: PostDisassociateSubnetCidrBlockHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateSubnetCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
