import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInvalidation20171030PathParams extends SpeakeasyBase {
    distributionId: string;
    id: string;
}
export declare class GetInvalidation20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInvalidation20171030Request extends SpeakeasyBase {
    pathParams: GetInvalidation20171030PathParams;
    headers: GetInvalidation20171030Headers;
}
export declare class GetInvalidation20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
