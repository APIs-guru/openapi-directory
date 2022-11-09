import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifySnapshotAttributeActionEnum {
    ModifySnapshotAttribute = "ModifySnapshotAttribute"
}
export declare enum PostModifySnapshotAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifySnapshotAttributeQueryParams extends SpeakeasyBase {
    action: PostModifySnapshotAttributeActionEnum;
    version: PostModifySnapshotAttributeVersionEnum;
}
export declare class PostModifySnapshotAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifySnapshotAttributeRequest extends SpeakeasyBase {
    queryParams: PostModifySnapshotAttributeQueryParams;
    headers: PostModifySnapshotAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostModifySnapshotAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
