import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHostInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HostArn" })
  hostArn: string;
}
