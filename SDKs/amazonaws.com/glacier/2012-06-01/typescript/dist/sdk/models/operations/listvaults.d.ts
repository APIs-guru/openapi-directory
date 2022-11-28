import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVaultsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ListVaultsQueryParams extends SpeakeasyBase {
    limit?: string;
    marker?: string;
}
export declare class ListVaultsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListVaultsRequest extends SpeakeasyBase {
    pathParams: ListVaultsPathParams;
    queryParams: ListVaultsQueryParams;
    headers: ListVaultsHeaders;
}
export declare class ListVaultsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listVaultsOutput?: shared.ListVaultsOutput;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
