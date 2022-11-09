import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyAvailabilityZoneGroupActionEnum {
    ModifyAvailabilityZoneGroup = "ModifyAvailabilityZoneGroup"
}
export declare enum GetModifyAvailabilityZoneGroupOptInStatusEnum {
    OptedIn = "opted-in",
    NotOptedIn = "not-opted-in"
}
export declare enum GetModifyAvailabilityZoneGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyAvailabilityZoneGroupQueryParams extends SpeakeasyBase {
    action: GetModifyAvailabilityZoneGroupActionEnum;
    dryRun?: boolean;
    groupName: string;
    optInStatus: GetModifyAvailabilityZoneGroupOptInStatusEnum;
    version: GetModifyAvailabilityZoneGroupVersionEnum;
}
export declare class GetModifyAvailabilityZoneGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyAvailabilityZoneGroupRequest extends SpeakeasyBase {
    queryParams: GetModifyAvailabilityZoneGroupQueryParams;
    headers: GetModifyAvailabilityZoneGroupHeaders;
}
export declare class GetModifyAvailabilityZoneGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
