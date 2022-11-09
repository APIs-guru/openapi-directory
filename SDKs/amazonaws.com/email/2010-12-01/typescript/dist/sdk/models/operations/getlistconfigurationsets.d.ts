import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListConfigurationSetsActionEnum {
    ListConfigurationSets = "ListConfigurationSets"
}
export declare enum GetListConfigurationSetsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetListConfigurationSetsQueryParams extends SpeakeasyBase {
    action: GetListConfigurationSetsActionEnum;
    maxItems?: number;
    nextToken?: string;
    version: GetListConfigurationSetsVersionEnum;
}
export declare class GetListConfigurationSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListConfigurationSetsRequest extends SpeakeasyBase {
    queryParams: GetListConfigurationSetsQueryParams;
    headers: GetListConfigurationSetsHeaders;
}
export declare class GetListConfigurationSetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
