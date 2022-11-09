import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateTagsXAmzTargetEnum {
    AwsPoseidonServiceV20151101CreateTags = "AWSPoseidonService_V2015_11_01.CreateTags"
}
export declare class CreateTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTagsXAmzTargetEnum;
}
export declare class CreateTagsRequest extends SpeakeasyBase {
    headers: CreateTagsHeaders;
    request: shared.CreateTagsRequest;
}
export declare class CreateTagsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    createTagsResponse?: Map<string, any>;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
