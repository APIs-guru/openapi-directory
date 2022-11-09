import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListCustomVerificationEmailTemplatesActionEnum {
    ListCustomVerificationEmailTemplates = "ListCustomVerificationEmailTemplates"
}
export declare enum GetListCustomVerificationEmailTemplatesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetListCustomVerificationEmailTemplatesQueryParams extends SpeakeasyBase {
    action: GetListCustomVerificationEmailTemplatesActionEnum;
    maxResults?: number;
    nextToken?: string;
    version: GetListCustomVerificationEmailTemplatesVersionEnum;
}
export declare class GetListCustomVerificationEmailTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListCustomVerificationEmailTemplatesRequest extends SpeakeasyBase {
    queryParams: GetListCustomVerificationEmailTemplatesQueryParams;
    headers: GetListCustomVerificationEmailTemplatesHeaders;
}
export declare class GetListCustomVerificationEmailTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
