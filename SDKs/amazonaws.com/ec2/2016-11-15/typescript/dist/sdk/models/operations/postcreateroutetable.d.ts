import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateRouteTableActionEnum {
    CreateRouteTable = "CreateRouteTable"
}
export declare enum PostCreateRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateRouteTableQueryParams extends SpeakeasyBase {
    action: PostCreateRouteTableActionEnum;
    version: PostCreateRouteTableVersionEnum;
}
export declare class PostCreateRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateRouteTableRequest extends SpeakeasyBase {
    queryParams: PostCreateRouteTableQueryParams;
    headers: PostCreateRouteTableHeaders;
    request?: Uint8Array;
}
export declare class PostCreateRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
