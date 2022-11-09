import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAssociateVpcCidrBlockActionEnum {
    AssociateVpcCidrBlock = "AssociateVpcCidrBlock"
}
export declare enum GetAssociateVpcCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssociateVpcCidrBlockQueryParams extends SpeakeasyBase {
    action: GetAssociateVpcCidrBlockActionEnum;
    amazonProvidedIpv6CidrBlock?: boolean;
    cidrBlock?: string;
    ipv6CidrBlock?: string;
    ipv6CidrBlockNetworkBorderGroup?: string;
    ipv6Pool?: string;
    version: GetAssociateVpcCidrBlockVersionEnum;
    vpcId: string;
}
export declare class GetAssociateVpcCidrBlockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateVpcCidrBlockRequest extends SpeakeasyBase {
    queryParams: GetAssociateVpcCidrBlockQueryParams;
    headers: GetAssociateVpcCidrBlockHeaders;
}
export declare class GetAssociateVpcCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
