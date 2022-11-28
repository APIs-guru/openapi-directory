import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBackupPolicyPathParams extends SpeakeasyBase {
    fileSystemId: string;
}
export declare class DescribeBackupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeBackupPolicyRequest extends SpeakeasyBase {
    pathParams: DescribeBackupPolicyPathParams;
    headers: DescribeBackupPolicyHeaders;
}
export declare class DescribeBackupPolicyResponse extends SpeakeasyBase {
    backupPolicyDescription?: shared.BackupPolicyDescription;
    badRequest?: any;
    contentType: string;
    fileSystemNotFound?: any;
    internalServerError?: any;
    policyNotFound?: any;
    statusCode: number;
    validationException?: any;
}
