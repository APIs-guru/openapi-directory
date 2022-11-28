import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartBlueprintRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlueprintName" })
  blueprintName: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
