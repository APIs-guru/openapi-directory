import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateGlobalTableXAmzTargetEnum {
    DynamoDb20120810UpdateGlobalTable = "DynamoDB_20120810.UpdateGlobalTable"
}
export declare class UpdateGlobalTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGlobalTableXAmzTargetEnum;
}
export declare class UpdateGlobalTableRequest extends SpeakeasyBase {
    headers: UpdateGlobalTableHeaders;
    request: shared.UpdateGlobalTableInput;
}
export declare class UpdateGlobalTableResponse extends SpeakeasyBase {
    contentType: string;
    globalTableNotFoundException?: any;
    internalServerError?: any;
    replicaAlreadyExistsException?: any;
    replicaNotFoundException?: any;
    statusCode: number;
    tableNotFoundException?: any;
    updateGlobalTableOutput?: shared.UpdateGlobalTableOutput;
}
