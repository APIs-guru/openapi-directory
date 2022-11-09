import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PutRepositoryTriggersOutput
/** 
 * Represents the output of a put repository triggers operation.
**/
export class PutRepositoryTriggersOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationId" })
  configurationId?: string;
}
