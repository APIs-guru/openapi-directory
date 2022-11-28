import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateDiscoveredResourceXAmzTargetEnum {
    AwsMigrationHubDisassociateDiscoveredResource = "AWSMigrationHub.DisassociateDiscoveredResource"
}
export declare class DisassociateDiscoveredResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateDiscoveredResourceXAmzTargetEnum;
}
export declare class DisassociateDiscoveredResourceRequest extends SpeakeasyBase {
    headers: DisassociateDiscoveredResourceHeaders;
    request: shared.DisassociateDiscoveredResourceRequest;
}
export declare class DisassociateDiscoveredResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    disassociateDiscoveredResourceResult?: Map<string, any>;
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
