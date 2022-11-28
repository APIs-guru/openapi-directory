import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyAvailabilityZoneGroupActionEnum {
    ModifyAvailabilityZoneGroup = "ModifyAvailabilityZoneGroup"
}
export declare enum PostModifyAvailabilityZoneGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyAvailabilityZoneGroupQueryParams extends SpeakeasyBase {
    action: PostModifyAvailabilityZoneGroupActionEnum;
    version: PostModifyAvailabilityZoneGroupVersionEnum;
}
export declare class PostModifyAvailabilityZoneGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyAvailabilityZoneGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyAvailabilityZoneGroupQueryParams;
    headers: PostModifyAvailabilityZoneGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyAvailabilityZoneGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
