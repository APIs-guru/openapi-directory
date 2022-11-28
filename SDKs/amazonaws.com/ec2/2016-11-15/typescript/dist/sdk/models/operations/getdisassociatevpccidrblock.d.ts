import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisassociateVpcCidrBlockActionEnum {
    DisassociateVpcCidrBlock = "DisassociateVpcCidrBlock"
}
export declare enum GetDisassociateVpcCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisassociateVpcCidrBlockQueryParams extends SpeakeasyBase {
    action: GetDisassociateVpcCidrBlockActionEnum;
    associationId: string;
    version: GetDisassociateVpcCidrBlockVersionEnum;
}
export declare class GetDisassociateVpcCidrBlockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateVpcCidrBlockRequest extends SpeakeasyBase {
    queryParams: GetDisassociateVpcCidrBlockQueryParams;
    headers: GetDisassociateVpcCidrBlockHeaders;
}
export declare class GetDisassociateVpcCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
