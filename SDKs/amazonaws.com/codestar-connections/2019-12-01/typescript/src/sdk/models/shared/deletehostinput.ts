import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteHostInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=HostArn" })
  hostArn: string;
}
