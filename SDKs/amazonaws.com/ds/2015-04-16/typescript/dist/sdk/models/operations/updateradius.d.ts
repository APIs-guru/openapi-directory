import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateRadiusXAmzTargetEnum {
    DirectoryService20150416UpdateRadius = "DirectoryService_20150416.UpdateRadius"
}
export declare class UpdateRadiusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRadiusXAmzTargetEnum;
}
export declare class UpdateRadiusRequest extends SpeakeasyBase {
    headers: UpdateRadiusHeaders;
    request: shared.UpdateRadiusRequest;
}
export declare class UpdateRadiusResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    updateRadiusResult?: Map<string, any>;
}
