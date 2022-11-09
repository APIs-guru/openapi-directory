import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeFastSnapshotRestoresActionEnum {
    DescribeFastSnapshotRestores = "DescribeFastSnapshotRestores"
}
export declare enum PostDescribeFastSnapshotRestoresVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeFastSnapshotRestoresQueryParams extends SpeakeasyBase {
    action: PostDescribeFastSnapshotRestoresActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeFastSnapshotRestoresVersionEnum;
}
export declare class PostDescribeFastSnapshotRestoresHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeFastSnapshotRestoresRequest extends SpeakeasyBase {
    queryParams: PostDescribeFastSnapshotRestoresQueryParams;
    headers: PostDescribeFastSnapshotRestoresHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeFastSnapshotRestoresResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
