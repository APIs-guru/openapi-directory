import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutConfigurationAggregatorXAmzTargetEnum {
    StarlingDoveServicePutConfigurationAggregator = "StarlingDoveService.PutConfigurationAggregator"
}
export declare class PutConfigurationAggregatorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutConfigurationAggregatorXAmzTargetEnum;
}
export declare class PutConfigurationAggregatorRequest extends SpeakeasyBase {
    headers: PutConfigurationAggregatorHeaders;
    request: shared.PutConfigurationAggregatorRequest;
}
export declare class PutConfigurationAggregatorResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    invalidRoleException?: any;
    limitExceededException?: any;
    noAvailableOrganizationException?: any;
    organizationAccessDeniedException?: any;
    organizationAllFeaturesNotEnabledException?: any;
    putConfigurationAggregatorResponse?: shared.PutConfigurationAggregatorResponse;
    statusCode: number;
}
