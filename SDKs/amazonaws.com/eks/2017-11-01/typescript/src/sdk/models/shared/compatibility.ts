import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Compatibility
/** 
 * Compatibility information.
**/
export class Compatibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterVersion" })
  clusterVersion?: string;

  @Metadata({ data: "json, name=defaultVersion" })
  defaultVersion?: boolean;

  @Metadata({ data: "json, name=platformVersions" })
  platformVersions?: string[];
}
