import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutRepositoryTriggersOutput
/** 
 * Represents the output of a put repository triggers operation.
**/
export class PutRepositoryTriggersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationId" })
  configurationId?: string;
}
