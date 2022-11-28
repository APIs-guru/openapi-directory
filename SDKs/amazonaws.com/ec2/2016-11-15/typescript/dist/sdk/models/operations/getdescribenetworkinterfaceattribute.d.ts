import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeNetworkInterfaceAttributeActionEnum {
    DescribeNetworkInterfaceAttribute = "DescribeNetworkInterfaceAttribute"
}
export declare enum GetDescribeNetworkInterfaceAttributeAttributeEnum {
    Description = "description",
    GroupSet = "groupSet",
    SourceDestCheck = "sourceDestCheck",
    Attachment = "attachment"
}
export declare enum GetDescribeNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeNetworkInterfaceAttributeQueryParams extends SpeakeasyBase {
    action: GetDescribeNetworkInterfaceAttributeActionEnum;
    attribute?: GetDescribeNetworkInterfaceAttributeAttributeEnum;
    dryRun?: boolean;
    networkInterfaceId: string;
    version: GetDescribeNetworkInterfaceAttributeVersionEnum;
}
export declare class GetDescribeNetworkInterfaceAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeNetworkInterfaceAttributeRequest extends SpeakeasyBase {
    queryParams: GetDescribeNetworkInterfaceAttributeQueryParams;
    headers: GetDescribeNetworkInterfaceAttributeHeaders;
}
export declare class GetDescribeNetworkInterfaceAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
