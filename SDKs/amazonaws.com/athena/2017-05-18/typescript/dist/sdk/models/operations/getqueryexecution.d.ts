import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetQueryExecutionXAmzTargetEnum {
    AmazonAthenaGetQueryExecution = "AmazonAthena.GetQueryExecution"
}
export declare class GetQueryExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetQueryExecutionXAmzTargetEnum;
}
export declare class GetQueryExecutionRequest extends SpeakeasyBase {
    headers: GetQueryExecutionHeaders;
    request: shared.GetQueryExecutionInput;
}
export declare class GetQueryExecutionResponse extends SpeakeasyBase {
    contentType: string;
    getQueryExecutionOutput?: shared.GetQueryExecutionOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
