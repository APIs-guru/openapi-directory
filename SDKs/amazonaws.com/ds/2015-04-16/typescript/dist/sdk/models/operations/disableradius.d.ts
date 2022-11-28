import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableRadiusXAmzTargetEnum {
    DirectoryService20150416DisableRadius = "DirectoryService_20150416.DisableRadius"
}
export declare class DisableRadiusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableRadiusXAmzTargetEnum;
}
export declare class DisableRadiusRequest extends SpeakeasyBase {
    headers: DisableRadiusHeaders;
    request: shared.DisableRadiusRequest;
}
export declare class DisableRadiusResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    disableRadiusResult?: Map<string, any>;
    entityDoesNotExistException?: any;
    serviceException?: any;
    statusCode: number;
}
