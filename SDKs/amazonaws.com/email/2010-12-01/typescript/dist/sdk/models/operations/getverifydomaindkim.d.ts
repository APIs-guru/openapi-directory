import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetVerifyDomainDkimActionEnum {
    VerifyDomainDkim = "VerifyDomainDkim"
}
export declare enum GetVerifyDomainDkimVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetVerifyDomainDkimQueryParams extends SpeakeasyBase {
    action: GetVerifyDomainDkimActionEnum;
    domain: string;
    version: GetVerifyDomainDkimVersionEnum;
}
export declare class GetVerifyDomainDkimHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetVerifyDomainDkimRequest extends SpeakeasyBase {
    queryParams: GetVerifyDomainDkimQueryParams;
    headers: GetVerifyDomainDkimHeaders;
}
export declare class GetVerifyDomainDkimResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
