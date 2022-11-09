import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ConnectionCreate;
}


export class CreateConnectionResponse extends SpeakeasyBase {
  @Metadata()
  connectionRead?: shared.ConnectionRead;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @Metadata()
  statusCode: number;
}
