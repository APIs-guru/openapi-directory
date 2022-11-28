import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyInstanceFleetXAmzTargetEnum {
    ElasticMapReduceModifyInstanceFleet = "ElasticMapReduce.ModifyInstanceFleet"
}
export declare class ModifyInstanceFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyInstanceFleetXAmzTargetEnum;
}
export declare class ModifyInstanceFleetRequest extends SpeakeasyBase {
    headers: ModifyInstanceFleetHeaders;
    request: shared.ModifyInstanceFleetInput;
}
export declare class ModifyInstanceFleetResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
