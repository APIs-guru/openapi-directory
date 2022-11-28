import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisableFastSnapshotRestoresActionEnum {
    DisableFastSnapshotRestores = "DisableFastSnapshotRestores"
}
export declare enum PostDisableFastSnapshotRestoresVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisableFastSnapshotRestoresQueryParams extends SpeakeasyBase {
    action: PostDisableFastSnapshotRestoresActionEnum;
    version: PostDisableFastSnapshotRestoresVersionEnum;
}
export declare class PostDisableFastSnapshotRestoresHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableFastSnapshotRestoresRequest extends SpeakeasyBase {
    queryParams: PostDisableFastSnapshotRestoresQueryParams;
    headers: PostDisableFastSnapshotRestoresHeaders;
    request?: Uint8Array;
}
export declare class PostDisableFastSnapshotRestoresResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
