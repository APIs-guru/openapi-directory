import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RestoreTableFromBackupXAmzTargetEnum {
    DynamoDb20120810RestoreTableFromBackup = "DynamoDB_20120810.RestoreTableFromBackup"
}
export declare class RestoreTableFromBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreTableFromBackupXAmzTargetEnum;
}
export declare class RestoreTableFromBackupRequest extends SpeakeasyBase {
    headers: RestoreTableFromBackupHeaders;
    request: shared.RestoreTableFromBackupInput;
}
export declare class RestoreTableFromBackupResponse extends SpeakeasyBase {
    backupInUseException?: any;
    backupNotFoundException?: any;
    contentType: string;
    internalServerError?: any;
    limitExceededException?: any;
    restoreTableFromBackupOutput?: shared.RestoreTableFromBackupOutput;
    statusCode: number;
    tableAlreadyExistsException?: any;
    tableInUseException?: any;
}
