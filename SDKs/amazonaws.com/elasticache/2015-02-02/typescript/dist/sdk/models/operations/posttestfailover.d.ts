import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostTestFailoverActionEnum {
    TestFailover = "TestFailover"
}
export declare enum PostTestFailoverVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostTestFailoverQueryParams extends SpeakeasyBase {
    action: PostTestFailoverActionEnum;
    version: PostTestFailoverVersionEnum;
}
export declare class PostTestFailoverHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTestFailoverRequest extends SpeakeasyBase {
    queryParams: PostTestFailoverQueryParams;
    headers: PostTestFailoverHeaders;
    request?: Uint8Array;
}
export declare class PostTestFailoverResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
