import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteTagsXAmzTargetEnum {
    AwsPoseidonServiceV20151101DeleteTags = "AWSPoseidonService_V2015_11_01.DeleteTags"
}
export declare class DeleteTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTagsXAmzTargetEnum;
}
export declare class DeleteTagsRequest extends SpeakeasyBase {
    headers: DeleteTagsHeaders;
    request: shared.DeleteTagsRequest;
}
export declare class DeleteTagsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    deleteTagsResponse?: Map<string, any>;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
