import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListOfferingTransactionsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListOfferingTransactionsXAmzTargetEnum {
    DeviceFarm20150623ListOfferingTransactions = "DeviceFarm_20150623.ListOfferingTransactions"
}
export declare class ListOfferingTransactionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOfferingTransactionsXAmzTargetEnum;
}
export declare class ListOfferingTransactionsRequest extends SpeakeasyBase {
    queryParams: ListOfferingTransactionsQueryParams;
    headers: ListOfferingTransactionsHeaders;
    request: shared.ListOfferingTransactionsRequest;
}
export declare class ListOfferingTransactionsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listOfferingTransactionsResult?: shared.ListOfferingTransactionsResult;
    notEligibleException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
