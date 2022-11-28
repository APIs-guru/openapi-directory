import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
