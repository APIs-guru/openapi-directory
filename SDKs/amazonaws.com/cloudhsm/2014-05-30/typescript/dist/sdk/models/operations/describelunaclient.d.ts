import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLunaClientXAmzTargetEnum {
    CloudHsmFrontendServiceDescribeLunaClient = "CloudHsmFrontendService.DescribeLunaClient"
}
export declare class DescribeLunaClientHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLunaClientXAmzTargetEnum;
}
export declare class DescribeLunaClientRequest extends SpeakeasyBase {
    headers: DescribeLunaClientHeaders;
    request: shared.DescribeLunaClientRequest;
}
export declare class DescribeLunaClientResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    describeLunaClientResponse?: shared.DescribeLunaClientResponse;
    invalidRequestException?: any;
    statusCode: number;
}
