import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAliasesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum ListAliasesXAmzTargetEnum {
    GameLiftListAliases = "GameLift.ListAliases"
}
export declare class ListAliasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAliasesXAmzTargetEnum;
}
export declare class ListAliasesRequest extends SpeakeasyBase {
    queryParams: ListAliasesQueryParams;
    headers: ListAliasesHeaders;
    request: shared.ListAliasesInput;
}
export declare class ListAliasesResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    listAliasesOutput?: shared.ListAliasesOutput;
    statusCode: number;
    unauthorizedException?: any;
}
