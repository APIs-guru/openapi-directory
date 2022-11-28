import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeauthorizeConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
