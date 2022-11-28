import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCustomMetricPathParams extends SpeakeasyBase {
    metricName: string;
}
export declare class CreateCustomMetricHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateCustomMetricRequestBodyMetricTypeEnum {
    StringList = "string-list",
    IpAddressList = "ip-address-list",
    NumberList = "number-list",
    Number = "number"
}
export declare class CreateCustomMetricRequestBody extends SpeakeasyBase {
    clientRequestToken: string;
    displayName?: string;
    metricType: CreateCustomMetricRequestBodyMetricTypeEnum;
    tags?: shared.Tag[];
}
export declare class CreateCustomMetricRequest extends SpeakeasyBase {
    pathParams: CreateCustomMetricPathParams;
    headers: CreateCustomMetricHeaders;
    request: CreateCustomMetricRequestBody;
}
export declare class CreateCustomMetricResponse extends SpeakeasyBase {
    contentType: string;
    createCustomMetricResponse?: shared.CreateCustomMetricResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
