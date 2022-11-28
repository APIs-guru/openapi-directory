import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGraphHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateGraphRequestBody extends SpeakeasyBase {
    tags?: Map<string, string>;
}
export declare class CreateGraphRequest extends SpeakeasyBase {
    headers: CreateGraphHeaders;
    request: CreateGraphRequestBody;
}
export declare class CreateGraphResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createGraphResponse?: shared.CreateGraphResponse;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
}
