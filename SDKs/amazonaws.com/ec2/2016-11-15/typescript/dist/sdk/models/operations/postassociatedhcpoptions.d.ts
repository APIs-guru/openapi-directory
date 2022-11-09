import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAssociateDhcpOptionsActionEnum {
    AssociateDhcpOptions = "AssociateDhcpOptions"
}
export declare enum PostAssociateDhcpOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssociateDhcpOptionsQueryParams extends SpeakeasyBase {
    action: PostAssociateDhcpOptionsActionEnum;
    version: PostAssociateDhcpOptionsVersionEnum;
}
export declare class PostAssociateDhcpOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateDhcpOptionsRequest extends SpeakeasyBase {
    queryParams: PostAssociateDhcpOptionsQueryParams;
    headers: PostAssociateDhcpOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateDhcpOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
