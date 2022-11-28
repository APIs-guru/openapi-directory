import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BlueprintDetails
/** 
 * The details of a blueprint.
**/
export class BlueprintDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlueprintName" })
  blueprintName?: string;

  @SpeakeasyMetadata({ data: "json, name=RunId" })
  runId?: string;
}
