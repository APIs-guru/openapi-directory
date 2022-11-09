import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateCreatedArtifactXAmzTargetEnum {
    AwsMigrationHubDisassociateCreatedArtifact = "AWSMigrationHub.DisassociateCreatedArtifact"
}
export declare class DisassociateCreatedArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateCreatedArtifactXAmzTargetEnum;
}
export declare class DisassociateCreatedArtifactRequest extends SpeakeasyBase {
    headers: DisassociateCreatedArtifactHeaders;
    request: shared.DisassociateCreatedArtifactRequest;
}
export declare class DisassociateCreatedArtifactResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    disassociateCreatedArtifactResult?: Map<string, any>;
    dryRunOperation?: any;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedOperation?: any;
}
