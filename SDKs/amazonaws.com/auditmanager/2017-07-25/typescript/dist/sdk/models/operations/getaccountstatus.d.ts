import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAccountStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAccountStatusRequest extends SpeakeasyBase {
    headers: GetAccountStatusHeaders;
}
export declare class GetAccountStatusResponse extends SpeakeasyBase {
    contentType: string;
    getAccountStatusResponse?: shared.GetAccountStatusResponse;
    internalServerException?: any;
    statusCode: number;
}
