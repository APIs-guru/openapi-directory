import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateComponentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=componentBuildVersionArn" })
  componentBuildVersionArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
