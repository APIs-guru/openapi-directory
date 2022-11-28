import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMitigationActionPathParams extends SpeakeasyBase {
    actionName: string;
}
export declare class DescribeMitigationActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeMitigationActionRequest extends SpeakeasyBase {
    pathParams: DescribeMitigationActionPathParams;
    headers: DescribeMitigationActionHeaders;
}
export declare class DescribeMitigationActionResponse extends SpeakeasyBase {
    contentType: string;
    describeMitigationActionResponse?: shared.DescribeMitigationActionResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
