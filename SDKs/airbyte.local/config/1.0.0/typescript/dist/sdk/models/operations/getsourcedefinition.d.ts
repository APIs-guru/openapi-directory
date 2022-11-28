import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSourceDefinitionRequest extends SpeakeasyBase {
    request: shared.SourceDefinitionIdRequestBody;
}
export declare class GetSourceDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    sourceDefinitionRead?: shared.SourceDefinitionRead;
    statusCode: number;
}
