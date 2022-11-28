import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteVpcPeeringConnectionActionEnum {
    DeleteVpcPeeringConnection = "DeleteVpcPeeringConnection"
}
export declare enum GetDeleteVpcPeeringConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteVpcPeeringConnectionQueryParams extends SpeakeasyBase {
    action: GetDeleteVpcPeeringConnectionActionEnum;
    dryRun?: boolean;
    version: GetDeleteVpcPeeringConnectionVersionEnum;
    vpcPeeringConnectionId: string;
}
export declare class GetDeleteVpcPeeringConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteVpcPeeringConnectionRequest extends SpeakeasyBase {
    queryParams: GetDeleteVpcPeeringConnectionQueryParams;
    headers: GetDeleteVpcPeeringConnectionHeaders;
}
export declare class GetDeleteVpcPeeringConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
