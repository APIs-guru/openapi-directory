import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDestinationDefinitionRequest extends SpeakeasyBase {
    request: shared.DestinationDefinitionUpdate;
}
export declare class UpdateDestinationDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    destinationDefinitionRead?: shared.DestinationDefinitionRead;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
