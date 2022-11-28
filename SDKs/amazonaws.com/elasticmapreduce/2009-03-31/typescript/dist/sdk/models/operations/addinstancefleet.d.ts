import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddInstanceFleetXAmzTargetEnum {
    ElasticMapReduceAddInstanceFleet = "ElasticMapReduce.AddInstanceFleet"
}
export declare class AddInstanceFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddInstanceFleetXAmzTargetEnum;
}
export declare class AddInstanceFleetRequest extends SpeakeasyBase {
    headers: AddInstanceFleetHeaders;
    request: shared.AddInstanceFleetInput;
}
export declare class AddInstanceFleetResponse extends SpeakeasyBase {
    addInstanceFleetOutput?: shared.AddInstanceFleetOutput;
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
