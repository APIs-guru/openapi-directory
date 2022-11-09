import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreatePlacementGroupActionEnum {
    CreatePlacementGroup = "CreatePlacementGroup"
}
export declare enum PostCreatePlacementGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreatePlacementGroupQueryParams extends SpeakeasyBase {
    action: PostCreatePlacementGroupActionEnum;
    version: PostCreatePlacementGroupVersionEnum;
}
export declare class PostCreatePlacementGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreatePlacementGroupRequest extends SpeakeasyBase {
    queryParams: PostCreatePlacementGroupQueryParams;
    headers: PostCreatePlacementGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreatePlacementGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
