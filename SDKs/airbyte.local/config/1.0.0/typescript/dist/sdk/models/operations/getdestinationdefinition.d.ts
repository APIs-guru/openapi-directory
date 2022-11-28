import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDestinationDefinitionRequest extends SpeakeasyBase {
    request: shared.DestinationDefinitionIdRequestBody;
}
export declare class GetDestinationDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    destinationDefinitionRead?: shared.DestinationDefinitionRead;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
