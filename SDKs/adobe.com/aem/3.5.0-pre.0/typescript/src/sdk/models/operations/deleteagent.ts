import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runmode" })
  runmode: string;
}


export class DeleteAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAgentPathParams;
}


export class DeleteAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
