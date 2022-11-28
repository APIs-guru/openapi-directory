import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateBlueprintRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlueprintLocation" })
  blueprintLocation: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
