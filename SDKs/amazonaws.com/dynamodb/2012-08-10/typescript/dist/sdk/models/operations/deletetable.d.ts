import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTableXAmzTargetEnum {
    DynamoDb20120810DeleteTable = "DynamoDB_20120810.DeleteTable"
}
export declare class DeleteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTableXAmzTargetEnum;
}
export declare class DeleteTableRequest extends SpeakeasyBase {
    headers: DeleteTableHeaders;
    request: shared.DeleteTableInput;
}
export declare class DeleteTableResponse extends SpeakeasyBase {
    contentType: string;
    deleteTableOutput?: shared.DeleteTableOutput;
    internalServerError?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
