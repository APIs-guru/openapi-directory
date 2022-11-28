import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
