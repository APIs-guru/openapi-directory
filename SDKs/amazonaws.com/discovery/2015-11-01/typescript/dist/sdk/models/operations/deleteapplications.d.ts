import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteApplicationsXAmzTargetEnum {
    AwsPoseidonServiceV20151101DeleteApplications = "AWSPoseidonService_V2015_11_01.DeleteApplications"
}
export declare class DeleteApplicationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationsXAmzTargetEnum;
}
export declare class DeleteApplicationsRequest extends SpeakeasyBase {
    headers: DeleteApplicationsHeaders;
    request: shared.DeleteApplicationsRequest;
}
export declare class DeleteApplicationsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    deleteApplicationsResponse?: Map<string, any>;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
