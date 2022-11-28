import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListThingsQueryParams extends SpeakeasyBase {
    attributeName?: string;
    attributeValue?: string;
    maxResults?: number;
    nextToken?: string;
    thingTypeName?: string;
    usePrefixAttributeValue?: boolean;
}
export declare class ListThingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListThingsRequest extends SpeakeasyBase {
    queryParams: ListThingsQueryParams;
    headers: ListThingsHeaders;
}
export declare class ListThingsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listThingsResponse?: shared.ListThingsResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
