import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceDefinitionUpdate
/** 
 * Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version.
**/
export class SourceDefinitionUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dockerImageTag" })
  dockerImageTag: string;

  @SpeakeasyMetadata({ data: "json, name=sourceDefinitionId" })
  sourceDefinitionId: string;
}
