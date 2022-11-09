import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeInstanceEventNotificationAttributesActionEnum {
    DescribeInstanceEventNotificationAttributes = "DescribeInstanceEventNotificationAttributes"
}
export declare enum GetDescribeInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeInstanceEventNotificationAttributesQueryParams extends SpeakeasyBase {
    action: GetDescribeInstanceEventNotificationAttributesActionEnum;
    dryRun?: boolean;
    version: GetDescribeInstanceEventNotificationAttributesVersionEnum;
}
export declare class GetDescribeInstanceEventNotificationAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
    queryParams: GetDescribeInstanceEventNotificationAttributesQueryParams;
    headers: GetDescribeInstanceEventNotificationAttributesHeaders;
}
export declare class GetDescribeInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
