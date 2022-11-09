import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyDefaultCreditSpecificationActionEnum {
    ModifyDefaultCreditSpecification = "ModifyDefaultCreditSpecification"
}
export declare enum PostModifyDefaultCreditSpecificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyDefaultCreditSpecificationQueryParams extends SpeakeasyBase {
    action: PostModifyDefaultCreditSpecificationActionEnum;
    version: PostModifyDefaultCreditSpecificationVersionEnum;
}
export declare class PostModifyDefaultCreditSpecificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDefaultCreditSpecificationRequest extends SpeakeasyBase {
    queryParams: PostModifyDefaultCreditSpecificationQueryParams;
    headers: PostModifyDefaultCreditSpecificationHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDefaultCreditSpecificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
