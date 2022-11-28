import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStudiosQueryParams extends SpeakeasyBase {
    marker?: string;
}
export declare enum ListStudiosXAmzTargetEnum {
    ElasticMapReduceListStudios = "ElasticMapReduce.ListStudios"
}
export declare class ListStudiosHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStudiosXAmzTargetEnum;
}
export declare class ListStudiosRequest extends SpeakeasyBase {
    queryParams: ListStudiosQueryParams;
    headers: ListStudiosHeaders;
    request: shared.ListStudiosInput;
}
export declare class ListStudiosResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listStudiosOutput?: shared.ListStudiosOutput;
    statusCode: number;
}
