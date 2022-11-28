import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDestinationRequest extends SpeakeasyBase {
    request: shared.DestinationUpdate;
}
export declare class UpdateDestinationResponse extends SpeakeasyBase {
    contentType: string;
    destinationRead?: shared.DestinationRead;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
}
