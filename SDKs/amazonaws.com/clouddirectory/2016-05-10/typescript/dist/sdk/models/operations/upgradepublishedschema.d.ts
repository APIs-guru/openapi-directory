import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpgradePublishedSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpgradePublishedSchemaRequestBody extends SpeakeasyBase {
    developmentSchemaArn: string;
    dryRun?: boolean;
    minorVersion: string;
    publishedSchemaArn: string;
}
export declare class UpgradePublishedSchemaRequest extends SpeakeasyBase {
    headers: UpgradePublishedSchemaHeaders;
    request: UpgradePublishedSchemaRequestBody;
}
export declare class UpgradePublishedSchemaResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    incompatibleSchemaException?: shared.IncompatibleSchemaException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidAttachmentException?: shared.InvalidAttachmentException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    upgradePublishedSchemaResponse?: shared.UpgradePublishedSchemaResponse;
    validationException?: shared.ValidationException;
}
