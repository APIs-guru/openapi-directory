import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutIntegrationPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class PutIntegrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
**/
export declare class PutIntegrationRequestBodyFlowDefinition extends SpeakeasyBase {
    description?: string;
    flowName?: string;
    kmsArn?: string;
    sourceFlowConfig?: shared.SourceFlowConfig;
    tasks?: shared.Task[];
    triggerConfig?: shared.TriggerConfig;
}
export declare class PutIntegrationRequestBody extends SpeakeasyBase {
    flowDefinition?: PutIntegrationRequestBodyFlowDefinition;
    objectTypeName: string;
    tags?: Map<string, string>;
    uri?: string;
}
export declare class PutIntegrationRequest extends SpeakeasyBase {
    pathParams: PutIntegrationPathParams;
    headers: PutIntegrationHeaders;
    request: PutIntegrationRequestBody;
}
export declare class PutIntegrationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    putIntegrationResponse?: shared.PutIntegrationResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
