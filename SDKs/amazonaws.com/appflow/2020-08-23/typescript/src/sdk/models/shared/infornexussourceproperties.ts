import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InforNexusSourceProperties
/** 
 *  The properties that are applied when Infor Nexus is being used as a source. 
**/
export class InforNexusSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object: string;
}
