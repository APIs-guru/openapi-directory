import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSetInstanceProtectionActionEnum {
    SetInstanceProtection = "SetInstanceProtection"
}
export declare enum GetSetInstanceProtectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetSetInstanceProtectionQueryParams extends SpeakeasyBase {
    action: GetSetInstanceProtectionActionEnum;
    autoScalingGroupName: string;
    instanceIds: string[];
    protectedFromScaleIn: boolean;
    version: GetSetInstanceProtectionVersionEnum;
}
export declare class GetSetInstanceProtectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetInstanceProtectionRequest extends SpeakeasyBase {
    queryParams: GetSetInstanceProtectionQueryParams;
    headers: GetSetInstanceProtectionHeaders;
}
export declare class GetSetInstanceProtectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
