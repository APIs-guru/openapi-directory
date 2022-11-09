import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListAvailableZonesXAmzTargetEnum {
    CloudHsmFrontendServiceListAvailableZones = "CloudHsmFrontendService.ListAvailableZones"
}
export declare class ListAvailableZonesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAvailableZonesXAmzTargetEnum;
}
export declare class ListAvailableZonesRequest extends SpeakeasyBase {
    headers: ListAvailableZonesHeaders;
    request: Map<string, any>;
}
export declare class ListAvailableZonesResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    invalidRequestException?: any;
    listAvailableZonesResponse?: shared.ListAvailableZonesResponse;
    statusCode: number;
}
