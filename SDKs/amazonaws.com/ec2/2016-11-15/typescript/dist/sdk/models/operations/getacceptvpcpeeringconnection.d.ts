import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAcceptVpcPeeringConnectionActionEnum {
    AcceptVpcPeeringConnection = "AcceptVpcPeeringConnection"
}
export declare enum GetAcceptVpcPeeringConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAcceptVpcPeeringConnectionQueryParams extends SpeakeasyBase {
    action: GetAcceptVpcPeeringConnectionActionEnum;
    dryRun?: boolean;
    version: GetAcceptVpcPeeringConnectionVersionEnum;
    vpcPeeringConnectionId?: string;
}
export declare class GetAcceptVpcPeeringConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAcceptVpcPeeringConnectionRequest extends SpeakeasyBase {
    queryParams: GetAcceptVpcPeeringConnectionQueryParams;
    headers: GetAcceptVpcPeeringConnectionHeaders;
}
export declare class GetAcceptVpcPeeringConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
