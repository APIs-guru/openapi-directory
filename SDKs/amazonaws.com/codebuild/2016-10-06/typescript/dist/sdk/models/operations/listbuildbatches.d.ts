import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBuildBatchesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListBuildBatchesXAmzTargetEnum {
    CodeBuild20161006ListBuildBatches = "CodeBuild_20161006.ListBuildBatches"
}
export declare class ListBuildBatchesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBuildBatchesXAmzTargetEnum;
}
export declare class ListBuildBatchesRequest extends SpeakeasyBase {
    queryParams: ListBuildBatchesQueryParams;
    headers: ListBuildBatchesHeaders;
    request: shared.ListBuildBatchesInput;
}
export declare class ListBuildBatchesResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    listBuildBatchesOutput?: shared.ListBuildBatchesOutput;
    statusCode: number;
}
