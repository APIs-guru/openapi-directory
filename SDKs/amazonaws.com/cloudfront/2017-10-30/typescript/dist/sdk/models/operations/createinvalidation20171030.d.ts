import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateInvalidation20171030PathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class CreateInvalidation20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateInvalidation20171030Request extends SpeakeasyBase {
    pathParams: CreateInvalidation20171030PathParams;
    headers: CreateInvalidation20171030Headers;
    request: Uint8Array;
}
export declare class CreateInvalidation20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
