import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutResourceAttributesXAmzTargetEnum {
    AwsMigrationHubPutResourceAttributes = "AWSMigrationHub.PutResourceAttributes"
}
export declare class PutResourceAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResourceAttributesXAmzTargetEnum;
}
export declare class PutResourceAttributesRequest extends SpeakeasyBase {
    headers: PutResourceAttributesHeaders;
    request: shared.PutResourceAttributesRequest;
}
export declare class PutResourceAttributesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    dryRunOperation?: any;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    putResourceAttributesResult?: Map<string, any>;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedOperation?: any;
}
