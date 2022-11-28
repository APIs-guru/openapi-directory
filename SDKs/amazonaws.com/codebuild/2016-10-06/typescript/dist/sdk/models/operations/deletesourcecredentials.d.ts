import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSourceCredentialsXAmzTargetEnum {
    CodeBuild20161006DeleteSourceCredentials = "CodeBuild_20161006.DeleteSourceCredentials"
}
export declare class DeleteSourceCredentialsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSourceCredentialsXAmzTargetEnum;
}
export declare class DeleteSourceCredentialsRequest extends SpeakeasyBase {
    headers: DeleteSourceCredentialsHeaders;
    request: shared.DeleteSourceCredentialsInput;
}
export declare class DeleteSourceCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    deleteSourceCredentialsOutput?: shared.DeleteSourceCredentialsOutput;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
