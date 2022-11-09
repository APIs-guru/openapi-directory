import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VeevaSourceProperties
/** 
 *  The properties that are applied when using Veeva as a flow source. 
**/
export class VeevaSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentType" })
  documentType?: string;

  @Metadata({ data: "json, name=includeAllVersions" })
  includeAllVersions?: boolean;

  @Metadata({ data: "json, name=includeRenditions" })
  includeRenditions?: boolean;

  @Metadata({ data: "json, name=includeSourceFiles" })
  includeSourceFiles?: boolean;

  @Metadata({ data: "json, name=object" })
  object: string;
}
