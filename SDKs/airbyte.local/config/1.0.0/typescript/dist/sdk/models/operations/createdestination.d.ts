import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDestinationRequest extends SpeakeasyBase {
    request: shared.DestinationCreate;
}
export declare class CreateDestinationResponse extends SpeakeasyBase {
    contentType: string;
    destinationRead?: shared.DestinationRead;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
}
