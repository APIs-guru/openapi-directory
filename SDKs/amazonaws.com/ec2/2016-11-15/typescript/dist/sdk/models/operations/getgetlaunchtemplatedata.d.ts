import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetLaunchTemplateDataActionEnum {
    GetLaunchTemplateData = "GetLaunchTemplateData"
}
export declare enum GetGetLaunchTemplateDataVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetLaunchTemplateDataQueryParams extends SpeakeasyBase {
    action: GetGetLaunchTemplateDataActionEnum;
    dryRun?: boolean;
    instanceId: string;
    version: GetGetLaunchTemplateDataVersionEnum;
}
export declare class GetGetLaunchTemplateDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetLaunchTemplateDataRequest extends SpeakeasyBase {
    queryParams: GetGetLaunchTemplateDataQueryParams;
    headers: GetGetLaunchTemplateDataHeaders;
}
export declare class GetGetLaunchTemplateDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
