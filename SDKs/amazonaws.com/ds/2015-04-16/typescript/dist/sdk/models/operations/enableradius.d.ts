import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum EnableRadiusXAmzTargetEnum {
    DirectoryService20150416EnableRadius = "DirectoryService_20150416.EnableRadius"
}
export declare class EnableRadiusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableRadiusXAmzTargetEnum;
}
export declare class EnableRadiusRequest extends SpeakeasyBase {
    headers: EnableRadiusHeaders;
    request: shared.EnableRadiusRequest;
}
export declare class EnableRadiusResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    enableRadiusResult?: Map<string, any>;
    entityAlreadyExistsException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
}
