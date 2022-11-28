import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListSourceCredentialsXAmzTargetEnum {
    CodeBuild20161006ListSourceCredentials = "CodeBuild_20161006.ListSourceCredentials"
}
export declare class ListSourceCredentialsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSourceCredentialsXAmzTargetEnum;
}
export declare class ListSourceCredentialsRequest extends SpeakeasyBase {
    headers: ListSourceCredentialsHeaders;
    request: Map<string, any>;
}
export declare class ListSourceCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    listSourceCredentialsOutput?: shared.ListSourceCredentialsOutput;
    statusCode: number;
}
