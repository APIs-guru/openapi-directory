import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListKeywordsForDataSourceSourceEnum {
    AwsCloudtrail = "AWS_Cloudtrail",
    AwsConfig = "AWS_Config",
    AwsSecurityHub = "AWS_Security_Hub",
    AwsApiCall = "AWS_API_Call",
    Manual = "MANUAL"
}
export declare class ListKeywordsForDataSourceQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    source: ListKeywordsForDataSourceSourceEnum;
}
export declare class ListKeywordsForDataSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListKeywordsForDataSourceRequest extends SpeakeasyBase {
    queryParams: ListKeywordsForDataSourceQueryParams;
    headers: ListKeywordsForDataSourceHeaders;
}
export declare class ListKeywordsForDataSourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listKeywordsForDataSourceResponse?: shared.ListKeywordsForDataSourceResponse;
    statusCode: number;
    validationException?: any;
}
