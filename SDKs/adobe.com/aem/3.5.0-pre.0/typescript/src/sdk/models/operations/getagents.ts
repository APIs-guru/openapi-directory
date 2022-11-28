import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAgentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runmode" })
  runmode: string;
}


export class GetAgentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAgentsPathParams;
}


export class GetAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAgentsDefaultApplicationJsonString?: string;
}
