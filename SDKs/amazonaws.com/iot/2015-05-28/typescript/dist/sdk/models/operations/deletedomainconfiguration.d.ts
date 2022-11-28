import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDomainConfigurationPathParams extends SpeakeasyBase {
    domainConfigurationName: string;
}
export declare class DeleteDomainConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDomainConfigurationRequest extends SpeakeasyBase {
    pathParams: DeleteDomainConfigurationPathParams;
    headers: DeleteDomainConfigurationHeaders;
}
export declare class DeleteDomainConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    deleteDomainConfigurationResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
