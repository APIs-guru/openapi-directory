import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBuildsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum ListBuildsXAmzTargetEnum {
    GameLiftListBuilds = "GameLift.ListBuilds"
}
export declare class ListBuildsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBuildsXAmzTargetEnum;
}
export declare class ListBuildsRequest extends SpeakeasyBase {
    queryParams: ListBuildsQueryParams;
    headers: ListBuildsHeaders;
    request: shared.ListBuildsInput;
}
export declare class ListBuildsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    listBuildsOutput?: shared.ListBuildsOutput;
    statusCode: number;
    unauthorizedException?: any;
}
