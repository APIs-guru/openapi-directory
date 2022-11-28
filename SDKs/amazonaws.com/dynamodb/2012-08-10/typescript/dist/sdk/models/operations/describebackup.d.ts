import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeBackupXAmzTargetEnum {
    DynamoDb20120810DescribeBackup = "DynamoDB_20120810.DescribeBackup"
}
export declare class DescribeBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBackupXAmzTargetEnum;
}
export declare class DescribeBackupRequest extends SpeakeasyBase {
    headers: DescribeBackupHeaders;
    request: shared.DescribeBackupInput;
}
export declare class DescribeBackupResponse extends SpeakeasyBase {
    backupNotFoundException?: any;
    contentType: string;
    describeBackupOutput?: shared.DescribeBackupOutput;
    internalServerError?: any;
    statusCode: number;
}
