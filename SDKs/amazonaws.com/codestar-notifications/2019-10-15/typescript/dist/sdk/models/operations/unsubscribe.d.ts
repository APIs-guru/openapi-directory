import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UnsubscribeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UnsubscribeRequestBody extends SpeakeasyBase {
    arn: string;
    targetAddress: string;
}
export declare class UnsubscribeRequest extends SpeakeasyBase {
    headers: UnsubscribeHeaders;
    request: UnsubscribeRequestBody;
}
export declare class UnsubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    unsubscribeResult?: shared.UnsubscribeResult;
    validationException?: any;
}
