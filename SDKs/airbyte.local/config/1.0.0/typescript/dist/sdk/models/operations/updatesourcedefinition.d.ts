import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSourceDefinitionRequest extends SpeakeasyBase {
    request?: shared.SourceDefinitionUpdate;
}
export declare class UpdateSourceDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    sourceDefinitionRead?: shared.SourceDefinitionRead;
    statusCode: number;
}
