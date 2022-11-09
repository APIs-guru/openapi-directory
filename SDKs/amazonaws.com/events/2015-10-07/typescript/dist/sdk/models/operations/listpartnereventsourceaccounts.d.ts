import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListPartnerEventSourceAccountsXAmzTargetEnum {
    AwsEventsListPartnerEventSourceAccounts = "AWSEvents.ListPartnerEventSourceAccounts"
}
export declare class ListPartnerEventSourceAccountsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPartnerEventSourceAccountsXAmzTargetEnum;
}
export declare class ListPartnerEventSourceAccountsRequest extends SpeakeasyBase {
    headers: ListPartnerEventSourceAccountsHeaders;
    request: shared.ListPartnerEventSourceAccountsRequest;
}
export declare class ListPartnerEventSourceAccountsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    listPartnerEventSourceAccountsResponse?: shared.ListPartnerEventSourceAccountsResponse;
    operationDisabledException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
