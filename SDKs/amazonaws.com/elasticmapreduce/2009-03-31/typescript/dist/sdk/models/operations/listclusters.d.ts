import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListClustersQueryParams extends SpeakeasyBase {
    marker?: string;
}
export declare enum ListClustersXAmzTargetEnum {
    ElasticMapReduceListClusters = "ElasticMapReduce.ListClusters"
}
export declare class ListClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListClustersXAmzTargetEnum;
}
export declare class ListClustersRequest extends SpeakeasyBase {
    queryParams: ListClustersQueryParams;
    headers: ListClustersHeaders;
    request: shared.ListClustersInput;
}
export declare class ListClustersResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listClustersOutput?: shared.ListClustersOutput;
    statusCode: number;
}
