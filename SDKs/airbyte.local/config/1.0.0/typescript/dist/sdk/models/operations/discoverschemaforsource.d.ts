import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DiscoverSchemaForSourceRequest extends SpeakeasyBase {
    request: shared.SourceIdRequestBody;
}
export declare class DiscoverSchemaForSourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    sourceDiscoverSchemaRead?: shared.SourceDiscoverSchemaRead;
    statusCode: number;
}
