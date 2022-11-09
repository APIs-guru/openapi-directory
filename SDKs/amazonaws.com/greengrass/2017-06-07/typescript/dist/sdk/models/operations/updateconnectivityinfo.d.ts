import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateConnectivityInfoPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class UpdateConnectivityInfoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateConnectivityInfoRequestBody extends SpeakeasyBase {
    connectivityInfo?: shared.ConnectivityInfo[];
}
export declare class UpdateConnectivityInfoRequest extends SpeakeasyBase {
    pathParams: UpdateConnectivityInfoPathParams;
    headers: UpdateConnectivityInfoHeaders;
    request: UpdateConnectivityInfoRequestBody;
}
export declare class UpdateConnectivityInfoResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalServerErrorException?: any;
    statusCode: number;
    updateConnectivityInfoResponse?: shared.UpdateConnectivityInfoResponse;
}
