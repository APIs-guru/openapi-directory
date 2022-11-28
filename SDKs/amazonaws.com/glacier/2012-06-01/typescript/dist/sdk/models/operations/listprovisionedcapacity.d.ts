import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProvisionedCapacityPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ListProvisionedCapacityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListProvisionedCapacityRequest extends SpeakeasyBase {
    pathParams: ListProvisionedCapacityPathParams;
    headers: ListProvisionedCapacityHeaders;
}
export declare class ListProvisionedCapacityResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listProvisionedCapacityOutput?: shared.ListProvisionedCapacityOutput;
    missingParameterValueException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
