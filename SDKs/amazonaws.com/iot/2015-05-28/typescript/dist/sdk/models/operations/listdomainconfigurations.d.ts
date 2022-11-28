import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListDomainConfigurationsServiceTypeEnum {
    Data = "DATA",
    CredentialProvider = "CREDENTIAL_PROVIDER",
    Jobs = "JOBS"
}
export declare class ListDomainConfigurationsQueryParams extends SpeakeasyBase {
    marker?: string;
    pageSize?: number;
    serviceType?: ListDomainConfigurationsServiceTypeEnum;
}
export declare class ListDomainConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDomainConfigurationsRequest extends SpeakeasyBase {
    queryParams: ListDomainConfigurationsQueryParams;
    headers: ListDomainConfigurationsHeaders;
}
export declare class ListDomainConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listDomainConfigurationsResponse?: shared.ListDomainConfigurationsResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
