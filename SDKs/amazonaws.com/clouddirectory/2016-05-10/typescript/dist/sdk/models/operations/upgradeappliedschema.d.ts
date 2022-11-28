import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpgradeAppliedSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpgradeAppliedSchemaRequestBody extends SpeakeasyBase {
    directoryArn: string;
    dryRun?: boolean;
    publishedSchemaArn: string;
}
export declare class UpgradeAppliedSchemaRequest extends SpeakeasyBase {
    headers: UpgradeAppliedSchemaHeaders;
    request: UpgradeAppliedSchemaRequestBody;
}
export declare class UpgradeAppliedSchemaResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    incompatibleSchemaException?: shared.IncompatibleSchemaException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidAttachmentException?: shared.InvalidAttachmentException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    upgradeAppliedSchemaResponse?: shared.UpgradeAppliedSchemaResponse;
    validationException?: shared.ValidationException;
}
