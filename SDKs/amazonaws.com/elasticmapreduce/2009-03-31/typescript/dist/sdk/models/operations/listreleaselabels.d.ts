import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListReleaseLabelsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListReleaseLabelsXAmzTargetEnum {
    ElasticMapReduceListReleaseLabels = "ElasticMapReduce.ListReleaseLabels"
}
export declare class ListReleaseLabelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReleaseLabelsXAmzTargetEnum;
}
export declare class ListReleaseLabelsRequest extends SpeakeasyBase {
    queryParams: ListReleaseLabelsQueryParams;
    headers: ListReleaseLabelsHeaders;
    request: shared.ListReleaseLabelsInput;
}
export declare class ListReleaseLabelsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listReleaseLabelsOutput?: shared.ListReleaseLabelsOutput;
    statusCode: number;
}
