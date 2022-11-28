import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBootstrapActionsQueryParams extends SpeakeasyBase {
    marker?: string;
}
export declare enum ListBootstrapActionsXAmzTargetEnum {
    ElasticMapReduceListBootstrapActions = "ElasticMapReduce.ListBootstrapActions"
}
export declare class ListBootstrapActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBootstrapActionsXAmzTargetEnum;
}
export declare class ListBootstrapActionsRequest extends SpeakeasyBase {
    queryParams: ListBootstrapActionsQueryParams;
    headers: ListBootstrapActionsHeaders;
    request: shared.ListBootstrapActionsInput;
}
export declare class ListBootstrapActionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listBootstrapActionsOutput?: shared.ListBootstrapActionsOutput;
    statusCode: number;
}
