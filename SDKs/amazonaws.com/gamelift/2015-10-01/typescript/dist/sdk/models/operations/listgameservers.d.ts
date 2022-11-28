import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListGameServersQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum ListGameServersXAmzTargetEnum {
    GameLiftListGameServers = "GameLift.ListGameServers"
}
export declare class ListGameServersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListGameServersXAmzTargetEnum;
}
export declare class ListGameServersRequest extends SpeakeasyBase {
    queryParams: ListGameServersQueryParams;
    headers: ListGameServersHeaders;
    request: shared.ListGameServersInput;
}
export declare class ListGameServersResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    listGameServersOutput?: shared.ListGameServersOutput;
    statusCode: number;
    unauthorizedException?: any;
}
