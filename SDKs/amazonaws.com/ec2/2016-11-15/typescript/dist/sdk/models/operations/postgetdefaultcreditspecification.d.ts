import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetDefaultCreditSpecificationActionEnum {
    GetDefaultCreditSpecification = "GetDefaultCreditSpecification"
}
export declare enum PostGetDefaultCreditSpecificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetDefaultCreditSpecificationQueryParams extends SpeakeasyBase {
    action: PostGetDefaultCreditSpecificationActionEnum;
    version: PostGetDefaultCreditSpecificationVersionEnum;
}
export declare class PostGetDefaultCreditSpecificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetDefaultCreditSpecificationRequest extends SpeakeasyBase {
    queryParams: PostGetDefaultCreditSpecificationQueryParams;
    headers: PostGetDefaultCreditSpecificationHeaders;
    request?: Uint8Array;
}
export declare class PostGetDefaultCreditSpecificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
