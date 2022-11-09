import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAgentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runmode" })
  runmode: string;
}


export class DeleteAgentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAgentPathParams;
}


export class DeleteAgentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
