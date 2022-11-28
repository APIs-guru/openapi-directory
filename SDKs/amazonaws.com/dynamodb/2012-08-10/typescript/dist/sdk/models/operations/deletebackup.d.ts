import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBackupXAmzTargetEnum {
    DynamoDb20120810DeleteBackup = "DynamoDB_20120810.DeleteBackup"
}
export declare class DeleteBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBackupXAmzTargetEnum;
}
export declare class DeleteBackupRequest extends SpeakeasyBase {
    headers: DeleteBackupHeaders;
    request: shared.DeleteBackupInput;
}
export declare class DeleteBackupResponse extends SpeakeasyBase {
    backupInUseException?: any;
    backupNotFoundException?: any;
    contentType: string;
    deleteBackupOutput?: shared.DeleteBackupOutput;
    internalServerError?: any;
    limitExceededException?: any;
    statusCode: number;
}
