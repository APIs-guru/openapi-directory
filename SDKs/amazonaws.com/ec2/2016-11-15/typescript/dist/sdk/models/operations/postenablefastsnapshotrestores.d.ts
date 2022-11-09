import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostEnableFastSnapshotRestoresActionEnum {
    EnableFastSnapshotRestores = "EnableFastSnapshotRestores"
}
export declare enum PostEnableFastSnapshotRestoresVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostEnableFastSnapshotRestoresQueryParams extends SpeakeasyBase {
    action: PostEnableFastSnapshotRestoresActionEnum;
    version: PostEnableFastSnapshotRestoresVersionEnum;
}
export declare class PostEnableFastSnapshotRestoresHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableFastSnapshotRestoresRequest extends SpeakeasyBase {
    queryParams: PostEnableFastSnapshotRestoresQueryParams;
    headers: PostEnableFastSnapshotRestoresHeaders;
    request?: Uint8Array;
}
export declare class PostEnableFastSnapshotRestoresResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
