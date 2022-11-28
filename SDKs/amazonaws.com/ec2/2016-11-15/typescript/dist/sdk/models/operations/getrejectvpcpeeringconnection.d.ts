import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRejectVpcPeeringConnectionActionEnum {
    RejectVpcPeeringConnection = "RejectVpcPeeringConnection"
}
export declare enum GetRejectVpcPeeringConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetRejectVpcPeeringConnectionQueryParams extends SpeakeasyBase {
    action: GetRejectVpcPeeringConnectionActionEnum;
    dryRun?: boolean;
    version: GetRejectVpcPeeringConnectionVersionEnum;
    vpcPeeringConnectionId: string;
}
export declare class GetRejectVpcPeeringConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRejectVpcPeeringConnectionRequest extends SpeakeasyBase {
    queryParams: GetRejectVpcPeeringConnectionQueryParams;
    headers: GetRejectVpcPeeringConnectionHeaders;
}
export declare class GetRejectVpcPeeringConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
