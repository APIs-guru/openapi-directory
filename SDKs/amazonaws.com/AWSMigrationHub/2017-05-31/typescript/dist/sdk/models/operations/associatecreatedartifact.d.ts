import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateCreatedArtifactXAmzTargetEnum {
    AwsMigrationHubAssociateCreatedArtifact = "AWSMigrationHub.AssociateCreatedArtifact"
}
export declare class AssociateCreatedArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateCreatedArtifactXAmzTargetEnum;
}
export declare class AssociateCreatedArtifactRequest extends SpeakeasyBase {
    headers: AssociateCreatedArtifactHeaders;
    request: shared.AssociateCreatedArtifactRequest;
}
export declare class AssociateCreatedArtifactResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    associateCreatedArtifactResult?: Map<string, any>;
    contentType: string;
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
