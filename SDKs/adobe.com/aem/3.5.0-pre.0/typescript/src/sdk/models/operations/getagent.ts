import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runmode" })
  runmode: string;
}


export class GetAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAgentPathParams;
}


export class GetAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
