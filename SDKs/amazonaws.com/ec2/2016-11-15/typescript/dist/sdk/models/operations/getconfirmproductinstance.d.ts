import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetConfirmProductInstanceActionEnum {
    ConfirmProductInstance = "ConfirmProductInstance"
}
export declare enum GetConfirmProductInstanceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetConfirmProductInstanceQueryParams extends SpeakeasyBase {
    action: GetConfirmProductInstanceActionEnum;
    dryRun?: boolean;
    instanceId: string;
    productCode: string;
    version: GetConfirmProductInstanceVersionEnum;
}
export declare class GetConfirmProductInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetConfirmProductInstanceRequest extends SpeakeasyBase {
    queryParams: GetConfirmProductInstanceQueryParams;
    headers: GetConfirmProductInstanceHeaders;
}
export declare class GetConfirmProductInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
