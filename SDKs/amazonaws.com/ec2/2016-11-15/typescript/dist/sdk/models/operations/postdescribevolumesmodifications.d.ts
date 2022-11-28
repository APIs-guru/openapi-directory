import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeVolumesModificationsActionEnum {
    DescribeVolumesModifications = "DescribeVolumesModifications"
}
export declare enum PostDescribeVolumesModificationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVolumesModificationsQueryParams extends SpeakeasyBase {
    action: PostDescribeVolumesModificationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeVolumesModificationsVersionEnum;
}
export declare class PostDescribeVolumesModificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVolumesModificationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeVolumesModificationsQueryParams;
    headers: PostDescribeVolumesModificationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVolumesModificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
