import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyInstanceCreditSpecificationActionEnum {
    ModifyInstanceCreditSpecification = "ModifyInstanceCreditSpecification"
}
export declare enum PostModifyInstanceCreditSpecificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyInstanceCreditSpecificationQueryParams extends SpeakeasyBase {
    action: PostModifyInstanceCreditSpecificationActionEnum;
    version: PostModifyInstanceCreditSpecificationVersionEnum;
}
export declare class PostModifyInstanceCreditSpecificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyInstanceCreditSpecificationRequest extends SpeakeasyBase {
    queryParams: PostModifyInstanceCreditSpecificationQueryParams;
    headers: PostModifyInstanceCreditSpecificationHeaders;
    request?: Uint8Array;
}
export declare class PostModifyInstanceCreditSpecificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
