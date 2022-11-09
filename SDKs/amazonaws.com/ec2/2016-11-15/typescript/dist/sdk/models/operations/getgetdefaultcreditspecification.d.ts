import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetDefaultCreditSpecificationActionEnum {
    GetDefaultCreditSpecification = "GetDefaultCreditSpecification"
}
export declare enum GetGetDefaultCreditSpecificationInstanceFamilyEnum {
    T2 = "t2",
    T3 = "t3",
    T3a = "t3a",
    T4g = "t4g"
}
export declare enum GetGetDefaultCreditSpecificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetGetDefaultCreditSpecificationQueryParams extends SpeakeasyBase {
    action: GetGetDefaultCreditSpecificationActionEnum;
    dryRun?: boolean;
    instanceFamily: GetGetDefaultCreditSpecificationInstanceFamilyEnum;
    version: GetGetDefaultCreditSpecificationVersionEnum;
}
export declare class GetGetDefaultCreditSpecificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetDefaultCreditSpecificationRequest extends SpeakeasyBase {
    queryParams: GetGetDefaultCreditSpecificationQueryParams;
    headers: GetGetDefaultCreditSpecificationHeaders;
}
export declare class GetGetDefaultCreditSpecificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
