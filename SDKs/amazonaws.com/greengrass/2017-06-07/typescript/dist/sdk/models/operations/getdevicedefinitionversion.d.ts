import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeviceDefinitionVersionPathParams extends SpeakeasyBase {
    deviceDefinitionId: string;
    deviceDefinitionVersionId: string;
}
export declare class GetDeviceDefinitionVersionQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetDeviceDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeviceDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: GetDeviceDefinitionVersionPathParams;
    queryParams: GetDeviceDefinitionVersionQueryParams;
    headers: GetDeviceDefinitionVersionHeaders;
}
export declare class GetDeviceDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getDeviceDefinitionVersionResponse?: shared.GetDeviceDefinitionVersionResponse;
    statusCode: number;
}
