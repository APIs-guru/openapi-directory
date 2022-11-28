import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePreparedStatementXAmzTargetEnum {
    AmazonAthenaDeletePreparedStatement = "AmazonAthena.DeletePreparedStatement"
}
export declare class DeletePreparedStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePreparedStatementXAmzTargetEnum;
}
export declare class DeletePreparedStatementRequest extends SpeakeasyBase {
    headers: DeletePreparedStatementHeaders;
    request: shared.DeletePreparedStatementInput;
}
export declare class DeletePreparedStatementResponse extends SpeakeasyBase {
    contentType: string;
    deletePreparedStatementOutput?: Map<string, any>;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
