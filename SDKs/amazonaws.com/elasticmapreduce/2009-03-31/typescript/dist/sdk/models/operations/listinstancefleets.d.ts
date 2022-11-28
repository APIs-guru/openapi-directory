import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListInstanceFleetsQueryParams extends SpeakeasyBase {
    marker?: string;
}
export declare enum ListInstanceFleetsXAmzTargetEnum {
    ElasticMapReduceListInstanceFleets = "ElasticMapReduce.ListInstanceFleets"
}
export declare class ListInstanceFleetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInstanceFleetsXAmzTargetEnum;
}
export declare class ListInstanceFleetsRequest extends SpeakeasyBase {
    queryParams: ListInstanceFleetsQueryParams;
    headers: ListInstanceFleetsHeaders;
    request: shared.ListInstanceFleetsInput;
}
export declare class ListInstanceFleetsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listInstanceFleetsOutput?: shared.ListInstanceFleetsOutput;
    statusCode: number;
}
