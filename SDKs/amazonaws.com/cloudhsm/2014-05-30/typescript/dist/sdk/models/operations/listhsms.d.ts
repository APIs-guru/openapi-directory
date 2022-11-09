import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListHsmsXAmzTargetEnum {
    CloudHsmFrontendServiceListHsms = "CloudHsmFrontendService.ListHsms"
}
export declare class ListHsmsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHsmsXAmzTargetEnum;
}
export declare class ListHsmsRequest extends SpeakeasyBase {
    headers: ListHsmsHeaders;
    request: shared.ListHsmsRequest;
}
export declare class ListHsmsResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    invalidRequestException?: any;
    listHsmsResponse?: shared.ListHsmsResponse;
    statusCode: number;
}
