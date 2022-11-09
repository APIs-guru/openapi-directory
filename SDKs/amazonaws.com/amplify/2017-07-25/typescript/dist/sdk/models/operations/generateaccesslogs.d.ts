import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GenerateAccessLogsPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class GenerateAccessLogsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GenerateAccessLogsRequestBody extends SpeakeasyBase {
    domainName: string;
    endTime?: Date;
    startTime?: Date;
}
export declare class GenerateAccessLogsRequest extends SpeakeasyBase {
    pathParams: GenerateAccessLogsPathParams;
    headers: GenerateAccessLogsHeaders;
    request: GenerateAccessLogsRequestBody;
}
export declare class GenerateAccessLogsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    generateAccessLogsResult?: shared.GenerateAccessLogsResult;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
