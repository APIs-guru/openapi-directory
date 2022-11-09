import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAssociateSubnetCidrBlockActionEnum {
    AssociateSubnetCidrBlock = "AssociateSubnetCidrBlock"
}
export declare enum GetAssociateSubnetCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssociateSubnetCidrBlockQueryParams extends SpeakeasyBase {
    action: GetAssociateSubnetCidrBlockActionEnum;
    ipv6CidrBlock: string;
    subnetId: string;
    version: GetAssociateSubnetCidrBlockVersionEnum;
}
export declare class GetAssociateSubnetCidrBlockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateSubnetCidrBlockRequest extends SpeakeasyBase {
    queryParams: GetAssociateSubnetCidrBlockQueryParams;
    headers: GetAssociateSubnetCidrBlockHeaders;
}
export declare class GetAssociateSubnetCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
