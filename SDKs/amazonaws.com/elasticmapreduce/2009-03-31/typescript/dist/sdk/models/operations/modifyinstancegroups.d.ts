import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyInstanceGroupsXAmzTargetEnum {
    ElasticMapReduceModifyInstanceGroups = "ElasticMapReduce.ModifyInstanceGroups"
}
export declare class ModifyInstanceGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyInstanceGroupsXAmzTargetEnum;
}
export declare class ModifyInstanceGroupsRequest extends SpeakeasyBase {
    headers: ModifyInstanceGroupsHeaders;
    request: shared.ModifyInstanceGroupsInput;
}
export declare class ModifyInstanceGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    statusCode: number;
}
