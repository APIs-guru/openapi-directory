import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListThingTypesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    thingTypeName?: string;
}
export declare class ListThingTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListThingTypesRequest extends SpeakeasyBase {
    queryParams: ListThingTypesQueryParams;
    headers: ListThingTypesHeaders;
}
export declare class ListThingTypesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listThingTypesResponse?: shared.ListThingTypesResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
