import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListOfferingsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListOfferingsXAmzTargetEnum {
    DeviceFarm20150623ListOfferings = "DeviceFarm_20150623.ListOfferings"
}
export declare class ListOfferingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOfferingsXAmzTargetEnum;
}
export declare class ListOfferingsRequest extends SpeakeasyBase {
    queryParams: ListOfferingsQueryParams;
    headers: ListOfferingsHeaders;
    request: shared.ListOfferingsRequest;
}
export declare class ListOfferingsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listOfferingsResult?: shared.ListOfferingsResult;
    notEligibleException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
