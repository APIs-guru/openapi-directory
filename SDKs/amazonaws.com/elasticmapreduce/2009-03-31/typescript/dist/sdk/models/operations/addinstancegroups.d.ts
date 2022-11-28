import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddInstanceGroupsXAmzTargetEnum {
    ElasticMapReduceAddInstanceGroups = "ElasticMapReduce.AddInstanceGroups"
}
export declare class AddInstanceGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddInstanceGroupsXAmzTargetEnum;
}
export declare class AddInstanceGroupsRequest extends SpeakeasyBase {
    headers: AddInstanceGroupsHeaders;
    request: shared.AddInstanceGroupsInput;
}
export declare class AddInstanceGroupsResponse extends SpeakeasyBase {
    addInstanceGroupsOutput?: shared.AddInstanceGroupsOutput;
    contentType: string;
    internalServerError?: any;
    statusCode: number;
}
