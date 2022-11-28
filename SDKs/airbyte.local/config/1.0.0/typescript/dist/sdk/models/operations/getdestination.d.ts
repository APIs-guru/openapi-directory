import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDestinationRequest extends SpeakeasyBase {
    request: shared.DestinationIdRequestBody;
}
export declare class GetDestinationResponse extends SpeakeasyBase {
    contentType: string;
    destinationRead?: shared.DestinationRead;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
