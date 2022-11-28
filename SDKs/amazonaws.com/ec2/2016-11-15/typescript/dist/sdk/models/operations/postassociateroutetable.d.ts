import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAssociateRouteTableActionEnum {
    AssociateRouteTable = "AssociateRouteTable"
}
export declare enum PostAssociateRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssociateRouteTableQueryParams extends SpeakeasyBase {
    action: PostAssociateRouteTableActionEnum;
    version: PostAssociateRouteTableVersionEnum;
}
export declare class PostAssociateRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateRouteTableRequest extends SpeakeasyBase {
    queryParams: PostAssociateRouteTableQueryParams;
    headers: PostAssociateRouteTableHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
