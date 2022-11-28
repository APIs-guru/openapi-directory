import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ImportMigrationTaskXAmzTargetEnum {
    AwsMigrationHubImportMigrationTask = "AWSMigrationHub.ImportMigrationTask"
}
export declare class ImportMigrationTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportMigrationTaskXAmzTargetEnum;
}
export declare class ImportMigrationTaskRequest extends SpeakeasyBase {
    headers: ImportMigrationTaskHeaders;
    request: shared.ImportMigrationTaskRequest;
}
export declare class ImportMigrationTaskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dryRunOperation?: any;
    homeRegionNotSetException?: any;
    importMigrationTaskResult?: Map<string, any>;
    internalServerError?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedOperation?: any;
}
