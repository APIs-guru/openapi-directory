import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceDefinitionUpdate
/** 
 * Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version.
**/
export class SourceDefinitionUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=dockerImageTag" })
  dockerImageTag: string;

  @Metadata({ data: "json, name=sourceDefinitionId" })
  sourceDefinitionId: string;
}
