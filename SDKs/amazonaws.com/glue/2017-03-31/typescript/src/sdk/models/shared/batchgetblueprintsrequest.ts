import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchGetBlueprintsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeBlueprint" })
  includeBlueprint?: boolean;

  @Metadata({ data: "json, name=IncludeParameterSpec" })
  includeParameterSpec?: boolean;

  @Metadata({ data: "json, name=Names" })
  names: string[];
}
