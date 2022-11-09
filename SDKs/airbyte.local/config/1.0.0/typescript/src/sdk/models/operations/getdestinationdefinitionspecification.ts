import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDestinationDefinitionSpecificationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DestinationDefinitionIdRequestBody;
}


export class GetDestinationDefinitionSpecificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  destinationDefinitionSpecificationRead?: shared.DestinationDefinitionSpecificationRead;

  @Metadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @Metadata()
  notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;

  @Metadata()
  statusCode: number;
}
