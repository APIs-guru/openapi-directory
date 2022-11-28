import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBlueprintsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListBlueprintsXAmzTargetEnum {
    AwsGlueListBlueprints = "AWSGlue.ListBlueprints"
}
export declare class ListBlueprintsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBlueprintsXAmzTargetEnum;
}
export declare class ListBlueprintsRequest extends SpeakeasyBase {
    queryParams: ListBlueprintsQueryParams;
    headers: ListBlueprintsHeaders;
    request: shared.ListBlueprintsRequest;
}
export declare class ListBlueprintsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    listBlueprintsResponse?: shared.ListBlueprintsResponse;
    operationTimeoutException?: any;
    statusCode: number;
}
