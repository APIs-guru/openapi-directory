import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProgrammaticAccessCredentialsQueryParams extends SpeakeasyBase {
    durationInMinutes?: number;
    environmentId: string;
}
export declare class GetProgrammaticAccessCredentialsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetProgrammaticAccessCredentialsRequest extends SpeakeasyBase {
    queryParams: GetProgrammaticAccessCredentialsQueryParams;
    headers: GetProgrammaticAccessCredentialsHeaders;
}
export declare class GetProgrammaticAccessCredentialsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getProgrammaticAccessCredentialsResponse?: shared.GetProgrammaticAccessCredentialsResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
}
