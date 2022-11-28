import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTableXAmzTargetEnum {
    DynamoDb20111205UpdateTable = "DynamoDB_20111205.UpdateTable"
}
export declare class UpdateTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTableXAmzTargetEnum;
}
export declare class UpdateTableRequest extends SpeakeasyBase {
    headers: UpdateTableHeaders;
    request: shared.UpdateTableInput;
}
export declare class UpdateTableResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateTableOutput?: shared.UpdateTableOutput;
}
