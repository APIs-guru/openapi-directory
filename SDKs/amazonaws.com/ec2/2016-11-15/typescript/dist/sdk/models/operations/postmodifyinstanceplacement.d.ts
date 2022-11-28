import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyInstancePlacementActionEnum {
    ModifyInstancePlacement = "ModifyInstancePlacement"
}
export declare enum PostModifyInstancePlacementVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyInstancePlacementQueryParams extends SpeakeasyBase {
    action: PostModifyInstancePlacementActionEnum;
    version: PostModifyInstancePlacementVersionEnum;
}
export declare class PostModifyInstancePlacementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyInstancePlacementRequest extends SpeakeasyBase {
    queryParams: PostModifyInstancePlacementQueryParams;
    headers: PostModifyInstancePlacementHeaders;
    request?: Uint8Array;
}
export declare class PostModifyInstancePlacementResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
