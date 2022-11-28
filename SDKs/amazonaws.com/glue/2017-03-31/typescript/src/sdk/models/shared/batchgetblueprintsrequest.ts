import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetBlueprintsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeBlueprint" })
  includeBlueprint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeParameterSpec" })
  includeParameterSpec?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names: string[];
}
