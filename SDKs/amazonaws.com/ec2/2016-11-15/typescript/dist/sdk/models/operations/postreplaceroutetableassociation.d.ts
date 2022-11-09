import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostReplaceRouteTableAssociationActionEnum {
    ReplaceRouteTableAssociation = "ReplaceRouteTableAssociation"
}
export declare enum PostReplaceRouteTableAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostReplaceRouteTableAssociationQueryParams extends SpeakeasyBase {
    action: PostReplaceRouteTableAssociationActionEnum;
    version: PostReplaceRouteTableAssociationVersionEnum;
}
export declare class PostReplaceRouteTableAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostReplaceRouteTableAssociationRequest extends SpeakeasyBase {
    queryParams: PostReplaceRouteTableAssociationQueryParams;
    headers: PostReplaceRouteTableAssociationHeaders;
    request?: Uint8Array;
}
export declare class PostReplaceRouteTableAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
