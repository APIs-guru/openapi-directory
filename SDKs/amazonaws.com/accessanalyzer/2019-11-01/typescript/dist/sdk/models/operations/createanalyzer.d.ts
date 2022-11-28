import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAnalyzerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateAnalyzerRequestBodyTypeEnum {
    Account = "ACCOUNT",
    Organization = "ORGANIZATION"
}
export declare class CreateAnalyzerRequestBody extends SpeakeasyBase {
    analyzerName: string;
    archiveRules?: shared.InlineArchiveRule[];
    clientToken?: string;
    tags?: Map<string, string>;
    type: CreateAnalyzerRequestBodyTypeEnum;
}
export declare class CreateAnalyzerRequest extends SpeakeasyBase {
    headers: CreateAnalyzerHeaders;
    request: CreateAnalyzerRequestBody;
}
export declare class CreateAnalyzerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createAnalyzerResponse?: shared.CreateAnalyzerResponse;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
