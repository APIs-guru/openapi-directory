import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeSnapshotAttributeActionEnum {
    DescribeSnapshotAttribute = "DescribeSnapshotAttribute"
}
export declare enum PostDescribeSnapshotAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeSnapshotAttributeQueryParams extends SpeakeasyBase {
    action: PostDescribeSnapshotAttributeActionEnum;
    version: PostDescribeSnapshotAttributeVersionEnum;
}
export declare class PostDescribeSnapshotAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSnapshotAttributeRequest extends SpeakeasyBase {
    queryParams: PostDescribeSnapshotAttributeQueryParams;
    headers: PostDescribeSnapshotAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSnapshotAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
