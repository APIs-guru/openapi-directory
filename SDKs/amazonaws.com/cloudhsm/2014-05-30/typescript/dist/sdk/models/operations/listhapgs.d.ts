import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListHapgsXAmzTargetEnum {
    CloudHsmFrontendServiceListHapgs = "CloudHsmFrontendService.ListHapgs"
}
export declare class ListHapgsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHapgsXAmzTargetEnum;
}
export declare class ListHapgsRequest extends SpeakeasyBase {
    headers: ListHapgsHeaders;
    request: shared.ListHapgsRequest;
}
export declare class ListHapgsResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    invalidRequestException?: any;
    listHapgsResponse?: shared.ListHapgsResponse;
    statusCode: number;
}
