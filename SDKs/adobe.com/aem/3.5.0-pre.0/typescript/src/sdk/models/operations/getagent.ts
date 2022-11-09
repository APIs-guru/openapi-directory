import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAgentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runmode" })
  runmode: string;
}


export class GetAgentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAgentPathParams;
}


export class GetAgentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
