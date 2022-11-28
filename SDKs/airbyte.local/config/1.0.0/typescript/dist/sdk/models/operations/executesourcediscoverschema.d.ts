import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExecuteSourceDiscoverSchemaRequest extends SpeakeasyBase {
    request: shared.SourceCoreConfig;
}
export declare class ExecuteSourceDiscoverSchemaResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    sourceDiscoverSchemaRead?: shared.SourceDiscoverSchemaRead;
    statusCode: number;
}
