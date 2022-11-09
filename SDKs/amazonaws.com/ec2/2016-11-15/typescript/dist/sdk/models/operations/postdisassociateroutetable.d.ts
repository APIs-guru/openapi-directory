import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisassociateRouteTableActionEnum {
    DisassociateRouteTable = "DisassociateRouteTable"
}
export declare enum PostDisassociateRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisassociateRouteTableQueryParams extends SpeakeasyBase {
    action: PostDisassociateRouteTableActionEnum;
    version: PostDisassociateRouteTableVersionEnum;
}
export declare class PostDisassociateRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateRouteTableRequest extends SpeakeasyBase {
    queryParams: PostDisassociateRouteTableQueryParams;
    headers: PostDisassociateRouteTableHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateRouteTableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
