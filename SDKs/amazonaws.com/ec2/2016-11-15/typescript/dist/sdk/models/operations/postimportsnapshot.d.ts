import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostImportSnapshotActionEnum {
    ImportSnapshot = "ImportSnapshot"
}
export declare enum PostImportSnapshotVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostImportSnapshotQueryParams extends SpeakeasyBase {
    action: PostImportSnapshotActionEnum;
    version: PostImportSnapshotVersionEnum;
}
export declare class PostImportSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostImportSnapshotRequest extends SpeakeasyBase {
    queryParams: PostImportSnapshotQueryParams;
    headers: PostImportSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostImportSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
