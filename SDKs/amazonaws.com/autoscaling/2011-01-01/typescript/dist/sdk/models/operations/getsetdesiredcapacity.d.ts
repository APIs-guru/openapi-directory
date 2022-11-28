import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSetDesiredCapacityActionEnum {
    SetDesiredCapacity = "SetDesiredCapacity"
}
export declare enum GetSetDesiredCapacityVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetSetDesiredCapacityQueryParams extends SpeakeasyBase {
    action: GetSetDesiredCapacityActionEnum;
    autoScalingGroupName: string;
    desiredCapacity: number;
    honorCooldown?: boolean;
    version: GetSetDesiredCapacityVersionEnum;
}
export declare class GetSetDesiredCapacityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetDesiredCapacityRequest extends SpeakeasyBase {
    queryParams: GetSetDesiredCapacityQueryParams;
    headers: GetSetDesiredCapacityHeaders;
}
export declare class GetSetDesiredCapacityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
