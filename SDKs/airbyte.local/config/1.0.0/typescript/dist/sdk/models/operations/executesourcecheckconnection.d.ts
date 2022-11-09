import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExecuteSourceCheckConnectionRequest extends SpeakeasyBase {
    request: shared.SourceCoreConfig;
}
export declare class ExecuteSourceCheckConnectionResponse extends SpeakeasyBase {
    checkConnectionRead?: shared.CheckConnectionRead;
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
}
