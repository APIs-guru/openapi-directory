import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateApplicationXAmzTargetEnum {
    AwsPoseidonServiceV20151101UpdateApplication = "AWSPoseidonService_V2015_11_01.UpdateApplication"
}
export declare class UpdateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApplicationXAmzTargetEnum;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    headers: UpdateApplicationHeaders;
    request: shared.UpdateApplicationRequest;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
    updateApplicationResponse?: Map<string, any>;
}
