import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyDefaultCreditSpecificationActionEnum {
    ModifyDefaultCreditSpecification = "ModifyDefaultCreditSpecification"
}
export declare enum GetModifyDefaultCreditSpecificationInstanceFamilyEnum {
    T2 = "t2",
    T3 = "t3",
    T3a = "t3a",
    T4g = "t4g"
}
export declare enum GetModifyDefaultCreditSpecificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyDefaultCreditSpecificationQueryParams extends SpeakeasyBase {
    action: GetModifyDefaultCreditSpecificationActionEnum;
    cpuCredits: string;
    dryRun?: boolean;
    instanceFamily: GetModifyDefaultCreditSpecificationInstanceFamilyEnum;
    version: GetModifyDefaultCreditSpecificationVersionEnum;
}
export declare class GetModifyDefaultCreditSpecificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDefaultCreditSpecificationRequest extends SpeakeasyBase {
    queryParams: GetModifyDefaultCreditSpecificationQueryParams;
    headers: GetModifyDefaultCreditSpecificationHeaders;
}
export declare class GetModifyDefaultCreditSpecificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
