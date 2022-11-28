import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartQueryExecutionXAmzTargetEnum {
    AmazonAthenaStartQueryExecution = "AmazonAthena.StartQueryExecution"
}
export declare class StartQueryExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartQueryExecutionXAmzTargetEnum;
}
export declare class StartQueryExecutionRequest extends SpeakeasyBase {
    headers: StartQueryExecutionHeaders;
    request: shared.StartQueryExecutionInput;
}
export declare class StartQueryExecutionResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    startQueryExecutionOutput?: shared.StartQueryExecutionOutput;
    statusCode: number;
    tooManyRequestsException?: any;
}
