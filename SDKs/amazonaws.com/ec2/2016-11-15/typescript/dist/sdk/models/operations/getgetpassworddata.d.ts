import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetPasswordDataActionEnum {
    GetPasswordData = "GetPasswordData"
}
export declare enum GetGetPasswordDataVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetPasswordDataQueryParams extends SpeakeasyBase {
    action: GetGetPasswordDataActionEnum;
    dryRun?: boolean;
    instanceId: string;
    version: GetGetPasswordDataVersionEnum;
}
export declare class GetGetPasswordDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetPasswordDataRequest extends SpeakeasyBase {
    queryParams: GetGetPasswordDataQueryParams;
    headers: GetGetPasswordDataHeaders;
}
export declare class GetGetPasswordDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
