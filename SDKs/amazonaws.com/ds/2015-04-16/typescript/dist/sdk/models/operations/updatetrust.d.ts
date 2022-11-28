import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTrustXAmzTargetEnum {
    DirectoryService20150416UpdateTrust = "DirectoryService_20150416.UpdateTrust"
}
export declare class UpdateTrustHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTrustXAmzTargetEnum;
}
export declare class UpdateTrustRequest extends SpeakeasyBase {
    headers: UpdateTrustHeaders;
    request: shared.UpdateTrustRequest;
}
export declare class UpdateTrustResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    updateTrustResult?: shared.UpdateTrustResult;
}
