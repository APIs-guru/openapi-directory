import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConnectivityInfoPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class GetConnectivityInfoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetConnectivityInfoRequest extends SpeakeasyBase {
    pathParams: GetConnectivityInfoPathParams;
    headers: GetConnectivityInfoHeaders;
}
export declare class GetConnectivityInfoResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getConnectivityInfoResponse?: shared.GetConnectivityInfoResponse;
    internalServerErrorException?: any;
    statusCode: number;
}
