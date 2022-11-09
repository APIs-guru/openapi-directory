import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateRepositoryXAmzTargetEnum {
    SpencerFrontendServiceCreateRepository = "SpencerFrontendService.CreateRepository"
}
export declare class CreateRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRepositoryXAmzTargetEnum;
}
export declare class CreateRepositoryRequest extends SpeakeasyBase {
    headers: CreateRepositoryHeaders;
    request: shared.CreateRepositoryRequest;
}
export declare class CreateRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    createRepositoryResponse?: shared.CreateRepositoryResponse;
    invalidParameterException?: any;
    invalidTagParameterException?: any;
    limitExceededException?: any;
    repositoryAlreadyExistsException?: any;
    serverException?: any;
    statusCode: number;
    tooManyTagsException?: any;
}
