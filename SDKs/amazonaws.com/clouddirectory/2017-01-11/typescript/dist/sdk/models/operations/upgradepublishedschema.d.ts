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
    accessDeniedException?: any;
    contentType: string;
    incompatibleSchemaException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidAttachmentException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    upgradePublishedSchemaResponse?: shared.UpgradePublishedSchemaResponse;
    validationException?: any;
}
