import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePreparedStatementXAmzTargetEnum {
    AmazonAthenaUpdatePreparedStatement = "AmazonAthena.UpdatePreparedStatement"
}
export declare class UpdatePreparedStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePreparedStatementXAmzTargetEnum;
}
export declare class UpdatePreparedStatementRequest extends SpeakeasyBase {
    headers: UpdatePreparedStatementHeaders;
    request: shared.UpdatePreparedStatementInput;
}
export declare class UpdatePreparedStatementResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updatePreparedStatementOutput?: Map<string, any>;
}
