import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFleetsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum ListFleetsXAmzTargetEnum {
    GameLiftListFleets = "GameLift.ListFleets"
}
export declare class ListFleetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFleetsXAmzTargetEnum;
}
export declare class ListFleetsRequest extends SpeakeasyBase {
    queryParams: ListFleetsQueryParams;
    headers: ListFleetsHeaders;
    request: shared.ListFleetsInput;
}
export declare class ListFleetsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    listFleetsOutput?: shared.ListFleetsOutput;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
