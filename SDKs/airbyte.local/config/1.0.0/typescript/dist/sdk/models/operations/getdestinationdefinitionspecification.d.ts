import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDestinationDefinitionSpecificationRequest extends SpeakeasyBase {
    request: shared.DestinationDefinitionIdRequestBody;
}
export declare class GetDestinationDefinitionSpecificationResponse extends SpeakeasyBase {
    contentType: string;
    destinationDefinitionSpecificationRead?: shared.DestinationDefinitionSpecificationRead;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
