import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAliasXAmzTargetEnum {
    DirectoryService20150416CreateAlias = "DirectoryService_20150416.CreateAlias"
}
export declare class CreateAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAliasXAmzTargetEnum;
}
export declare class CreateAliasRequest extends SpeakeasyBase {
    headers: CreateAliasHeaders;
    request: shared.CreateAliasRequest;
}
export declare class CreateAliasResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createAliasResult?: shared.CreateAliasResult;
    entityAlreadyExistsException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
}
