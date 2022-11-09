import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyVpcTenancyActionEnum {
    ModifyVpcTenancy = "ModifyVpcTenancy"
}
export declare enum GetModifyVpcTenancyInstanceTenancyEnum {
    Default = "default"
}
export declare enum GetModifyVpcTenancyVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyVpcTenancyQueryParams extends SpeakeasyBase {
    action: GetModifyVpcTenancyActionEnum;
    dryRun?: boolean;
    instanceTenancy: GetModifyVpcTenancyInstanceTenancyEnum;
    version: GetModifyVpcTenancyVersionEnum;
    vpcId: string;
}
export declare class GetModifyVpcTenancyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyVpcTenancyRequest extends SpeakeasyBase {
    queryParams: GetModifyVpcTenancyQueryParams;
    headers: GetModifyVpcTenancyHeaders;
}
export declare class GetModifyVpcTenancyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
