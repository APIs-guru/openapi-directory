import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteHostInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HostArn" })
  hostArn: string;
}
