import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateBlueprintRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlueprintLocation" })
  blueprintLocation: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
