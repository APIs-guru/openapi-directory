import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListScriptsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum ListScriptsXAmzTargetEnum {
    GameLiftListScripts = "GameLift.ListScripts"
}
export declare class ListScriptsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListScriptsXAmzTargetEnum;
}
export declare class ListScriptsRequest extends SpeakeasyBase {
    queryParams: ListScriptsQueryParams;
    headers: ListScriptsHeaders;
    request: shared.ListScriptsInput;
}
export declare class ListScriptsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    listScriptsOutput?: shared.ListScriptsOutput;
    statusCode: number;
    unauthorizedException?: any;
}
