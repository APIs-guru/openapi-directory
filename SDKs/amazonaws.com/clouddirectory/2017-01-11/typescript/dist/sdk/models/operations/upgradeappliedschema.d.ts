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
    accessDeniedException?: any;
    contentType: string;
    incompatibleSchemaException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidAttachmentException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    schemaAlreadyExistsException?: any;
    statusCode: number;
    upgradeAppliedSchemaResponse?: shared.UpgradeAppliedSchemaResponse;
    validationException?: any;
}
