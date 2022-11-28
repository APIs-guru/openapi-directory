import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePreparedStatementXAmzTargetEnum {
    AmazonAthenaCreatePreparedStatement = "AmazonAthena.CreatePreparedStatement"
}
export declare class CreatePreparedStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePreparedStatementXAmzTargetEnum;
}
export declare class CreatePreparedStatementRequest extends SpeakeasyBase {
    headers: CreatePreparedStatementHeaders;
    request: shared.CreatePreparedStatementInput;
}
export declare class CreatePreparedStatementResponse extends SpeakeasyBase {
    contentType: string;
    createPreparedStatementOutput?: Map<string, any>;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
