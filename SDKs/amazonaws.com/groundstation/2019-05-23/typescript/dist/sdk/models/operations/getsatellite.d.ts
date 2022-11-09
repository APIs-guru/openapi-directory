import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSatellitePathParams extends SpeakeasyBase {
    satelliteId: string;
}
export declare class GetSatelliteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSatelliteRequest extends SpeakeasyBase {
    pathParams: GetSatellitePathParams;
    headers: GetSatelliteHeaders;
}
export declare class GetSatelliteResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    getSatelliteResponse?: shared.GetSatelliteResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
