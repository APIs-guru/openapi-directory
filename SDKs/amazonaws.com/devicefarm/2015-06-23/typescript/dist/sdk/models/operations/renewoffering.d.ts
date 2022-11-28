import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RenewOfferingXAmzTargetEnum {
    DeviceFarm20150623RenewOffering = "DeviceFarm_20150623.RenewOffering"
}
export declare class RenewOfferingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RenewOfferingXAmzTargetEnum;
}
export declare class RenewOfferingRequest extends SpeakeasyBase {
    headers: RenewOfferingHeaders;
    request: shared.RenewOfferingRequest;
}
export declare class RenewOfferingResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    notEligibleException?: any;
    notFoundException?: any;
    renewOfferingResult?: shared.RenewOfferingResult;
    serviceAccountException?: any;
    statusCode: number;
}
