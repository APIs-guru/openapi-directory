import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostComposeEnvironmentsActionEnum {
    ComposeEnvironments = "ComposeEnvironments"
}
export declare enum PostComposeEnvironmentsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostComposeEnvironmentsQueryParams extends SpeakeasyBase {
    action: PostComposeEnvironmentsActionEnum;
    version: PostComposeEnvironmentsVersionEnum;
}
export declare class PostComposeEnvironmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostComposeEnvironmentsRequest extends SpeakeasyBase {
    queryParams: PostComposeEnvironmentsQueryParams;
    headers: PostComposeEnvironmentsHeaders;
    request?: Uint8Array;
}
export declare class PostComposeEnvironmentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
