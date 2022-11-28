import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRulesPackagesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListRulesPackagesXAmzTargetEnum {
    InspectorServiceListRulesPackages = "InspectorService.ListRulesPackages"
}
export declare class ListRulesPackagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRulesPackagesXAmzTargetEnum;
}
export declare class ListRulesPackagesRequest extends SpeakeasyBase {
    queryParams: ListRulesPackagesQueryParams;
    headers: ListRulesPackagesHeaders;
    request: shared.ListRulesPackagesRequest;
}
export declare class ListRulesPackagesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    listRulesPackagesResponse?: shared.ListRulesPackagesResponse;
    statusCode: number;
}
