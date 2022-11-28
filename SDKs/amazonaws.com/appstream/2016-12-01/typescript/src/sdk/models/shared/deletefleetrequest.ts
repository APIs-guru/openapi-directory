import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
