import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateDhcpOptionsActionEnum {
    CreateDhcpOptions = "CreateDhcpOptions"
}
export declare enum PostCreateDhcpOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateDhcpOptionsQueryParams extends SpeakeasyBase {
    action: PostCreateDhcpOptionsActionEnum;
    version: PostCreateDhcpOptionsVersionEnum;
}
export declare class PostCreateDhcpOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDhcpOptionsRequest extends SpeakeasyBase {
    queryParams: PostCreateDhcpOptionsQueryParams;
    headers: PostCreateDhcpOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDhcpOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
