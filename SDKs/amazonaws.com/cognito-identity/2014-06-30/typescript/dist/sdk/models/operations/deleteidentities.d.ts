import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteIdentitiesXAmzTargetEnum {
    AwsCognitoIdentityServiceDeleteIdentities = "AWSCognitoIdentityService.DeleteIdentities"
}
export declare class DeleteIdentitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteIdentitiesXAmzTargetEnum;
}
export declare class DeleteIdentitiesRequest extends SpeakeasyBase {
    headers: DeleteIdentitiesHeaders;
    request: shared.DeleteIdentitiesInput;
}
export declare class DeleteIdentitiesResponse extends SpeakeasyBase {
    contentType: string;
    deleteIdentitiesResponse?: shared.DeleteIdentitiesResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
