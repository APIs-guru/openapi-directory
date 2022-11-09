import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteComponentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentBuildVersionArn" })
  componentBuildVersionArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
