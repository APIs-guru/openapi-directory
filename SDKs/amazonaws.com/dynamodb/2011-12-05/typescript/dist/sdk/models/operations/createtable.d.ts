import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTableXAmzTargetEnum {
    DynamoDb20111205CreateTable = "DynamoDB_20111205.CreateTable"
}
export declare class CreateTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTableXAmzTargetEnum;
}
export declare class CreateTableRequest extends SpeakeasyBase {
    headers: CreateTableHeaders;
    request: shared.CreateTableInput;
}
export declare class CreateTableResponse extends SpeakeasyBase {
    contentType: string;
    createTableOutput?: shared.CreateTableOutput;
    internalServerError?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
