import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateDestinationDefinitionRequest extends SpeakeasyBase {
    request?: shared.DestinationDefinitionCreate;
}
export declare class CreateDestinationDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    destinationDefinitionRead?: shared.DestinationDefinitionRead;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
}
