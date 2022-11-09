import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WebBackendRecreateDestinationRequest extends SpeakeasyBase {
    request: shared.DestinationRecreate;
}
export declare class WebBackendRecreateDestinationResponse extends SpeakeasyBase {
    contentType: string;
    destinationRead?: shared.DestinationRead;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
}
