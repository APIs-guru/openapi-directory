import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateConnectionRequest extends SpeakeasyBase {
    request: shared.ConnectionUpdate;
}
export declare class UpdateConnectionResponse extends SpeakeasyBase {
    connectionRead?: shared.ConnectionRead;
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
}
