import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VeevaSourceProperties
/** 
 *  The properties that are applied when using Veeva as a flow source. 
**/
export class VeevaSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentType" })
  documentType?: string;

  @SpeakeasyMetadata({ data: "json, name=includeAllVersions" })
  includeAllVersions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeRenditions" })
  includeRenditions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeSourceFiles" })
  includeSourceFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
