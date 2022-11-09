import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartBlueprintRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlueprintName" })
  blueprintName: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
