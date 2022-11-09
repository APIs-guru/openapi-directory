import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExecuteDestinationCheckConnectionRequest extends SpeakeasyBase {
    request: shared.DestinationCoreConfig;
}
export declare class ExecuteDestinationCheckConnectionResponse extends SpeakeasyBase {
    checkConnectionRead?: shared.CheckConnectionRead;
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
}
