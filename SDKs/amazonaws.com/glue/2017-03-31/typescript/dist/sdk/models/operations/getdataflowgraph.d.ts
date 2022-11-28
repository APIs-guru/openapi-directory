import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDataflowGraphXAmzTargetEnum {
    AwsGlueGetDataflowGraph = "AWSGlue.GetDataflowGraph"
}
export declare class GetDataflowGraphHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataflowGraphXAmzTargetEnum;
}
export declare class GetDataflowGraphRequest extends SpeakeasyBase {
    headers: GetDataflowGraphHeaders;
    request: shared.GetDataflowGraphRequest;
}
export declare class GetDataflowGraphResponse extends SpeakeasyBase {
    contentType: string;
    getDataflowGraphResponse?: shared.GetDataflowGraphResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
