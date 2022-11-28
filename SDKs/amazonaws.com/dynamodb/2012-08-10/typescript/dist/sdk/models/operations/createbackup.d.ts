import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateBackupXAmzTargetEnum {
    DynamoDb20120810CreateBackup = "DynamoDB_20120810.CreateBackup"
}
export declare class CreateBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBackupXAmzTargetEnum;
}
export declare class CreateBackupRequest extends SpeakeasyBase {
    headers: CreateBackupHeaders;
    request: shared.CreateBackupInput;
}
export declare class CreateBackupResponse extends SpeakeasyBase {
    backupInUseException?: any;
    contentType: string;
    continuousBackupsUnavailableException?: any;
    createBackupOutput?: shared.CreateBackupOutput;
    internalServerError?: any;
    limitExceededException?: any;
    statusCode: number;
    tableInUseException?: any;
    tableNotFoundException?: any;
}
