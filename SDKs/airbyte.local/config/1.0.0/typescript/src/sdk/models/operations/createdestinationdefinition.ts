import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDestinationDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.DestinationDefinitionCreate;
}


export class CreateDestinationDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  destinationDefinitionRead?: shared.DestinationDefinitionRead;

  @Metadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @Metadata()
  statusCode: number;
}
