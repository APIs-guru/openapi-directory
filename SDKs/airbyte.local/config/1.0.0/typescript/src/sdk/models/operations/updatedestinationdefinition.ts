import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDestinationDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DestinationDefinitionUpdate;
}


export class UpdateDestinationDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  destinationDefinitionRead?: shared.DestinationDefinitionRead;

  @Metadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @Metadata()
  notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;

  @Metadata()
  statusCode: number;
}
