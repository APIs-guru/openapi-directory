import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateApplicationRequestBody extends SpeakeasyBase {
    applicationDescription?: string;
    applicationName: string;
    clientToken?: string;
    roleArn: string;
    tags?: Map<string, string>;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    headers: CreateApplicationHeaders;
    request: CreateApplicationRequestBody;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    createApplicationResponse?: shared.CreateApplicationResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
