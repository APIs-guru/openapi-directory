import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RestoreTableToPointInTimeXAmzTargetEnum {
    DynamoDb20120810RestoreTableToPointInTime = "DynamoDB_20120810.RestoreTableToPointInTime"
}
export declare class RestoreTableToPointInTimeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreTableToPointInTimeXAmzTargetEnum;
}
export declare class RestoreTableToPointInTimeRequest extends SpeakeasyBase {
    headers: RestoreTableToPointInTimeHeaders;
    request: shared.RestoreTableToPointInTimeInput;
}
export declare class RestoreTableToPointInTimeResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRestoreTimeException?: any;
    limitExceededException?: any;
    pointInTimeRecoveryUnavailableException?: any;
    restoreTableToPointInTimeOutput?: shared.RestoreTableToPointInTimeOutput;
    statusCode: number;
    tableAlreadyExistsException?: any;
    tableInUseException?: any;
    tableNotFoundException?: any;
}
