import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InforNexusSourceProperties
/** 
 *  The properties that are applied when Infor Nexus is being used as a source. 
**/
export class InforNexusSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
