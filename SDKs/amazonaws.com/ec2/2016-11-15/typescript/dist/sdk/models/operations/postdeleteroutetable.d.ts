import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteRouteTableActionEnum {
    DeleteRouteTable = "DeleteRouteTable"
}
export declare enum PostDeleteRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteRouteTableQueryParams extends SpeakeasyBase {
    action: PostDeleteRouteTableActionEnum;
    version: PostDeleteRouteTableVersionEnum;
}
export declare class PostDeleteRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteRouteTableRequest extends SpeakeasyBase {
    queryParams: PostDeleteRouteTableQueryParams;
    headers: PostDeleteRouteTableHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteRouteTableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
