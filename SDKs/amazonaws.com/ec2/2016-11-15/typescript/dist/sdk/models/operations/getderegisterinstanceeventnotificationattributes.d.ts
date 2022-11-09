import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeregisterInstanceEventNotificationAttributesActionEnum {
    DeregisterInstanceEventNotificationAttributes = "DeregisterInstanceEventNotificationAttributes"
}
/**
 * Information about the tag keys to deregister for the current Region. You can either specify individual tag keys or deregister all tag keys in the current Region. You must specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request
**/
export declare class GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute extends SpeakeasyBase {
    includeAllTagsOfInstance?: boolean;
    instanceTagKeys?: string[];
}
export declare enum GetDeregisterInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeregisterInstanceEventNotificationAttributesQueryParams extends SpeakeasyBase {
    action: GetDeregisterInstanceEventNotificationAttributesActionEnum;
    dryRun?: boolean;
    instanceTagAttribute?: GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute;
    version: GetDeregisterInstanceEventNotificationAttributesVersionEnum;
}
export declare class GetDeregisterInstanceEventNotificationAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeregisterInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
    queryParams: GetDeregisterInstanceEventNotificationAttributesQueryParams;
    headers: GetDeregisterInstanceEventNotificationAttributesHeaders;
}
export declare class GetDeregisterInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
