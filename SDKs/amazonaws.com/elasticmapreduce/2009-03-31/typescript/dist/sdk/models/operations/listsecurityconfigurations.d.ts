import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSecurityConfigurationsQueryParams extends SpeakeasyBase {
    marker?: string;
}
export declare enum ListSecurityConfigurationsXAmzTargetEnum {
    ElasticMapReduceListSecurityConfigurations = "ElasticMapReduce.ListSecurityConfigurations"
}
export declare class ListSecurityConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSecurityConfigurationsXAmzTargetEnum;
}
export declare class ListSecurityConfigurationsRequest extends SpeakeasyBase {
    queryParams: ListSecurityConfigurationsQueryParams;
    headers: ListSecurityConfigurationsHeaders;
    request: shared.ListSecurityConfigurationsInput;
}
export declare class ListSecurityConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listSecurityConfigurationsOutput?: shared.ListSecurityConfigurationsOutput;
    statusCode: number;
}
