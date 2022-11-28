import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEventConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateEventConfigurationsRequestBody extends SpeakeasyBase {
    eventConfigurations?: Map<string, shared.Configuration>;
}
export declare class UpdateEventConfigurationsRequest extends SpeakeasyBase {
    headers: UpdateEventConfigurationsHeaders;
    request: UpdateEventConfigurationsRequestBody;
}
export declare class UpdateEventConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
    updateEventConfigurationsResponse?: Map<string, any>;
}
