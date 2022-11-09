import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteVpcEndpointsActionEnum {
    DeleteVpcEndpoints = "DeleteVpcEndpoints"
}
export declare enum GetDeleteVpcEndpointsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteVpcEndpointsQueryParams extends SpeakeasyBase {
    action: GetDeleteVpcEndpointsActionEnum;
    dryRun?: boolean;
    version: GetDeleteVpcEndpointsVersionEnum;
    vpcEndpointId: string[];
}
export declare class GetDeleteVpcEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteVpcEndpointsRequest extends SpeakeasyBase {
    queryParams: GetDeleteVpcEndpointsQueryParams;
    headers: GetDeleteVpcEndpointsHeaders;
}
export declare class GetDeleteVpcEndpointsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
