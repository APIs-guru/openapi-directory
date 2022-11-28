import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ImportSourceCredentialsXAmzTargetEnum {
    CodeBuild20161006ImportSourceCredentials = "CodeBuild_20161006.ImportSourceCredentials"
}
export declare class ImportSourceCredentialsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportSourceCredentialsXAmzTargetEnum;
}
export declare class ImportSourceCredentialsRequest extends SpeakeasyBase {
    headers: ImportSourceCredentialsHeaders;
    request: shared.ImportSourceCredentialsInput;
}
export declare class ImportSourceCredentialsResponse extends SpeakeasyBase {
    accountLimitExceededException?: any;
    contentType: string;
    importSourceCredentialsOutput?: shared.ImportSourceCredentialsOutput;
    invalidInputException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
}
