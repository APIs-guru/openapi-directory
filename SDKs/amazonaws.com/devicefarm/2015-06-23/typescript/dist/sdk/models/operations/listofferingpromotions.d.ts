import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListOfferingPromotionsXAmzTargetEnum {
    DeviceFarm20150623ListOfferingPromotions = "DeviceFarm_20150623.ListOfferingPromotions"
}
export declare class ListOfferingPromotionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOfferingPromotionsXAmzTargetEnum;
}
export declare class ListOfferingPromotionsRequest extends SpeakeasyBase {
    headers: ListOfferingPromotionsHeaders;
    request: shared.ListOfferingPromotionsRequest;
}
export declare class ListOfferingPromotionsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listOfferingPromotionsResult?: shared.ListOfferingPromotionsResult;
    notEligibleException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
