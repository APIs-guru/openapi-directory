import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListIdentitiesActionEnum {
    ListIdentities = "ListIdentities"
}
export declare enum GetListIdentitiesIdentityTypeEnum {
    EmailAddress = "EmailAddress",
    Domain = "Domain"
}
export declare enum GetListIdentitiesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetListIdentitiesQueryParams extends SpeakeasyBase {
    action: GetListIdentitiesActionEnum;
    identityType?: GetListIdentitiesIdentityTypeEnum;
    maxItems?: number;
    nextToken?: string;
    version: GetListIdentitiesVersionEnum;
}
export declare class GetListIdentitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListIdentitiesRequest extends SpeakeasyBase {
    queryParams: GetListIdentitiesQueryParams;
    headers: GetListIdentitiesHeaders;
}
export declare class GetListIdentitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
