import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CheckConnectionToDestinationRequest extends SpeakeasyBase {
    request: shared.DestinationIdRequestBody;
}
export declare class CheckConnectionToDestinationResponse extends SpeakeasyBase {
    checkConnectionRead?: shared.CheckConnectionRead;
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
