import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateGlobalTableXAmzTargetEnum {
    DynamoDb20120810CreateGlobalTable = "DynamoDB_20120810.CreateGlobalTable"
}
export declare class CreateGlobalTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGlobalTableXAmzTargetEnum;
}
export declare class CreateGlobalTableRequest extends SpeakeasyBase {
    headers: CreateGlobalTableHeaders;
    request: shared.CreateGlobalTableInput;
}
export declare class CreateGlobalTableResponse extends SpeakeasyBase {
    contentType: string;
    createGlobalTableOutput?: shared.CreateGlobalTableOutput;
    globalTableAlreadyExistsException?: any;
    internalServerError?: any;
    limitExceededException?: any;
    statusCode: number;
    tableNotFoundException?: any;
}
