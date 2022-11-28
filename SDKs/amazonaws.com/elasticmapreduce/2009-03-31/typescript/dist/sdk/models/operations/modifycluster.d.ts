import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyClusterXAmzTargetEnum {
    ElasticMapReduceModifyCluster = "ElasticMapReduce.ModifyCluster"
}
export declare class ModifyClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyClusterXAmzTargetEnum;
}
export declare class ModifyClusterRequest extends SpeakeasyBase {
    headers: ModifyClusterHeaders;
    request: shared.ModifyClusterInput;
}
export declare class ModifyClusterResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    modifyClusterOutput?: shared.ModifyClusterOutput;
    statusCode: number;
}
