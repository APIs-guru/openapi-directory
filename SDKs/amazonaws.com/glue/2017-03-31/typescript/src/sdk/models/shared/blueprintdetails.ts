import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BlueprintDetails
/** 
 * The details of a blueprint.
**/
export class BlueprintDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlueprintName" })
  blueprintName?: string;

  @Metadata({ data: "json, name=RunId" })
  runId?: string;
}
