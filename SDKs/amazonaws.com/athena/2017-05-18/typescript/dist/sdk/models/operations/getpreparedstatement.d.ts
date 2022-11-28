import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPreparedStatementXAmzTargetEnum {
    AmazonAthenaGetPreparedStatement = "AmazonAthena.GetPreparedStatement"
}
export declare class GetPreparedStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPreparedStatementXAmzTargetEnum;
}
export declare class GetPreparedStatementRequest extends SpeakeasyBase {
    headers: GetPreparedStatementHeaders;
    request: shared.GetPreparedStatementInput;
}
export declare class GetPreparedStatementResponse extends SpeakeasyBase {
    contentType: string;
    getPreparedStatementOutput?: shared.GetPreparedStatementOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
