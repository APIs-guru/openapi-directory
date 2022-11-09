import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListServiceSpecificCredentialsActionEnum {
    ListServiceSpecificCredentials = "ListServiceSpecificCredentials"
}
export declare enum GetListServiceSpecificCredentialsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListServiceSpecificCredentialsQueryParams extends SpeakeasyBase {
    action: GetListServiceSpecificCredentialsActionEnum;
    serviceName?: string;
    userName?: string;
    version: GetListServiceSpecificCredentialsVersionEnum;
}
export declare class GetListServiceSpecificCredentialsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListServiceSpecificCredentialsRequest extends SpeakeasyBase {
    queryParams: GetListServiceSpecificCredentialsQueryParams;
    headers: GetListServiceSpecificCredentialsHeaders;
}
export declare class GetListServiceSpecificCredentialsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
