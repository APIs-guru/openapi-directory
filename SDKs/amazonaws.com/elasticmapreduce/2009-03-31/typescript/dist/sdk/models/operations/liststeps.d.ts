import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStepsQueryParams extends SpeakeasyBase {
    marker?: string;
}
export declare enum ListStepsXAmzTargetEnum {
    ElasticMapReduceListSteps = "ElasticMapReduce.ListSteps"
}
export declare class ListStepsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStepsXAmzTargetEnum;
}
export declare class ListStepsRequest extends SpeakeasyBase {
    queryParams: ListStepsQueryParams;
    headers: ListStepsHeaders;
    request: shared.ListStepsInput;
}
export declare class ListStepsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listStepsOutput?: shared.ListStepsOutput;
    statusCode: number;
}
