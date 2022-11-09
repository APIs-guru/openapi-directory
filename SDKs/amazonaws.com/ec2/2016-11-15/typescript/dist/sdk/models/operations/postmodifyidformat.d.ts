import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyIdFormatActionEnum {
    ModifyIdFormat = "ModifyIdFormat"
}
export declare enum PostModifyIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyIdFormatQueryParams extends SpeakeasyBase {
    action: PostModifyIdFormatActionEnum;
    version: PostModifyIdFormatVersionEnum;
}
export declare class PostModifyIdFormatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyIdFormatRequest extends SpeakeasyBase {
    queryParams: PostModifyIdFormatQueryParams;
    headers: PostModifyIdFormatHeaders;
    request?: Uint8Array;
}
export declare class PostModifyIdFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
