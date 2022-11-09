import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateSourceDefinitionRequest extends SpeakeasyBase {
    request?: shared.SourceDefinitionCreate;
}
export declare class CreateSourceDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    sourceDefinitionRead?: shared.SourceDefinitionRead;
    statusCode: number;
}
