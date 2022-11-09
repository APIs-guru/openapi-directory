import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateConnectionRequest extends SpeakeasyBase {
    request: shared.ConnectionCreate;
}
export declare class CreateConnectionResponse extends SpeakeasyBase {
    connectionRead?: shared.ConnectionRead;
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
}
