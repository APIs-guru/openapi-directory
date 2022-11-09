import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListTemplatesActionEnum {
    ListTemplates = "ListTemplates"
}
export declare enum GetListTemplatesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetListTemplatesQueryParams extends SpeakeasyBase {
    action: GetListTemplatesActionEnum;
    maxItems?: number;
    nextToken?: string;
    version: GetListTemplatesVersionEnum;
}
export declare class GetListTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListTemplatesRequest extends SpeakeasyBase {
    queryParams: GetListTemplatesQueryParams;
    headers: GetListTemplatesHeaders;
}
export declare class GetListTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
