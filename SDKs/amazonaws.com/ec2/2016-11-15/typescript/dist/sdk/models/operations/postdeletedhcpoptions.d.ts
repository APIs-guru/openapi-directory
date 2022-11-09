import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteDhcpOptionsActionEnum {
    DeleteDhcpOptions = "DeleteDhcpOptions"
}
export declare enum PostDeleteDhcpOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteDhcpOptionsQueryParams extends SpeakeasyBase {
    action: PostDeleteDhcpOptionsActionEnum;
    version: PostDeleteDhcpOptionsVersionEnum;
}
export declare class PostDeleteDhcpOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDhcpOptionsRequest extends SpeakeasyBase {
    queryParams: PostDeleteDhcpOptionsQueryParams;
    headers: PostDeleteDhcpOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDhcpOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
