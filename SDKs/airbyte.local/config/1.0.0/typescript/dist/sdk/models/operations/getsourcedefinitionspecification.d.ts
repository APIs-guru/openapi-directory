import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSourceDefinitionSpecificationRequest extends SpeakeasyBase {
    request: shared.SourceDefinitionIdRequestBody;
}
export declare class GetSourceDefinitionSpecificationResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    sourceDefinitionSpecificationRead?: shared.SourceDefinitionSpecificationRead;
    statusCode: number;
}
