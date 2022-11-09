import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRegisterInstanceEventNotificationAttributesActionEnum {
    RegisterInstanceEventNotificationAttributes = "RegisterInstanceEventNotificationAttributes"
}
/**
 * Information about the tag keys to register for the current Region. You can either specify individual tag keys or register all tag keys in the current Region. You must specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request
**/
export declare class GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute extends SpeakeasyBase {
    includeAllTagsOfInstance?: boolean;
    instanceTagKeys?: string[];
}
export declare enum GetRegisterInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetRegisterInstanceEventNotificationAttributesQueryParams extends SpeakeasyBase {
    action: GetRegisterInstanceEventNotificationAttributesActionEnum;
    dryRun?: boolean;
    instanceTagAttribute?: GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute;
    version: GetRegisterInstanceEventNotificationAttributesVersionEnum;
}
export declare class GetRegisterInstanceEventNotificationAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRegisterInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
    queryParams: GetRegisterInstanceEventNotificationAttributesQueryParams;
    headers: GetRegisterInstanceEventNotificationAttributesHeaders;
}
export declare class GetRegisterInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
