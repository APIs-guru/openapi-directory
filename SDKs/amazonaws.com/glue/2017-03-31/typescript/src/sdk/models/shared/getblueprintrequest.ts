import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBlueprintRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeBlueprint" })
  includeBlueprint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeParameterSpec" })
  includeParameterSpec?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
