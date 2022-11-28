import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateApplicationXAmzTargetEnum {
    AwsPoseidonServiceV20151101CreateApplication = "AWSPoseidonService_V2015_11_01.CreateApplication"
}
export declare class CreateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApplicationXAmzTargetEnum;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    headers: CreateApplicationHeaders;
    request: shared.CreateApplicationRequest;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    createApplicationResponse?: shared.CreateApplicationResponse;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
