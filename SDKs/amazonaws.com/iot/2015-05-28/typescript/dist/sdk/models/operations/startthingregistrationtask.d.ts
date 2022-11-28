import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartThingRegistrationTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartThingRegistrationTaskRequestBody extends SpeakeasyBase {
    inputFileBucket: string;
    inputFileKey: string;
    roleArn: string;
    templateBody: string;
}
export declare class StartThingRegistrationTaskRequest extends SpeakeasyBase {
    headers: StartThingRegistrationTaskHeaders;
    request: StartThingRegistrationTaskRequestBody;
}
export declare class StartThingRegistrationTaskResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    startThingRegistrationTaskResponse?: shared.StartThingRegistrationTaskResponse;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
