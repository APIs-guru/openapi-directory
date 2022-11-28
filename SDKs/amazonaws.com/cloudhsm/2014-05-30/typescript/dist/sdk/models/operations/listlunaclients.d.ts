import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListLunaClientsXAmzTargetEnum {
    CloudHsmFrontendServiceListLunaClients = "CloudHsmFrontendService.ListLunaClients"
}
export declare class ListLunaClientsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLunaClientsXAmzTargetEnum;
}
export declare class ListLunaClientsRequest extends SpeakeasyBase {
    headers: ListLunaClientsHeaders;
    request: shared.ListLunaClientsRequest;
}
export declare class ListLunaClientsResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    invalidRequestException?: any;
    listLunaClientsResponse?: shared.ListLunaClientsResponse;
    statusCode: number;
}
