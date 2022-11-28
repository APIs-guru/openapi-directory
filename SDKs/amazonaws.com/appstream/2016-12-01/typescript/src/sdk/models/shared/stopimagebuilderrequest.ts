import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopImageBuilderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
