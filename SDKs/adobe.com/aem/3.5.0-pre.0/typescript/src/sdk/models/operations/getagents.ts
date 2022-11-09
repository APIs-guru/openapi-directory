import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAgentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=runmode" })
  runmode: string;
}


export class GetAgentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAgentsPathParams;
}


export class GetAgentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAgentsDefaultApplicationJsonString?: string;
}
