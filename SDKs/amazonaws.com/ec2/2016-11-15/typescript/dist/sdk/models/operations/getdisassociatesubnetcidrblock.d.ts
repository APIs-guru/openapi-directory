import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisassociateSubnetCidrBlockActionEnum {
    DisassociateSubnetCidrBlock = "DisassociateSubnetCidrBlock"
}
export declare enum GetDisassociateSubnetCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisassociateSubnetCidrBlockQueryParams extends SpeakeasyBase {
    action: GetDisassociateSubnetCidrBlockActionEnum;
    associationId: string;
    version: GetDisassociateSubnetCidrBlockVersionEnum;
}
export declare class GetDisassociateSubnetCidrBlockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateSubnetCidrBlockRequest extends SpeakeasyBase {
    queryParams: GetDisassociateSubnetCidrBlockQueryParams;
    headers: GetDisassociateSubnetCidrBlockHeaders;
}
export declare class GetDisassociateSubnetCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
