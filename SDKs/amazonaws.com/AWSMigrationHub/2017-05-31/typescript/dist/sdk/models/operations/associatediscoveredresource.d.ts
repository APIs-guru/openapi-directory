import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AssociateDiscoveredResourceXAmzTargetEnum {
    AwsMigrationHubAssociateDiscoveredResource = "AWSMigrationHub.AssociateDiscoveredResource"
}
export declare class AssociateDiscoveredResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateDiscoveredResourceXAmzTargetEnum;
}
export declare class AssociateDiscoveredResourceRequest extends SpeakeasyBase {
    headers: AssociateDiscoveredResourceHeaders;
    request: shared.AssociateDiscoveredResourceRequest;
}
export declare class AssociateDiscoveredResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    associateDiscoveredResourceResult?: Map<string, any>;
    contentType: string;
    dryRunOperation?: any;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    policyErrorException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedOperation?: any;
}
