import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListThingPrincipalsPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class ListThingPrincipalsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListThingPrincipalsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListThingPrincipalsRequest extends SpeakeasyBase {
    pathParams: ListThingPrincipalsPathParams;
    queryParams: ListThingPrincipalsQueryParams;
    headers: ListThingPrincipalsHeaders;
}
export declare class ListThingPrincipalsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listThingPrincipalsResponse?: shared.ListThingPrincipalsResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
