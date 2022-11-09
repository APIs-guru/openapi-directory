import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeletePlacementGroupActionEnum {
    DeletePlacementGroup = "DeletePlacementGroup"
}
export declare enum PostDeletePlacementGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeletePlacementGroupQueryParams extends SpeakeasyBase {
    action: PostDeletePlacementGroupActionEnum;
    version: PostDeletePlacementGroupVersionEnum;
}
export declare class PostDeletePlacementGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeletePlacementGroupRequest extends SpeakeasyBase {
    queryParams: PostDeletePlacementGroupQueryParams;
    headers: PostDeletePlacementGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeletePlacementGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
