import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Compatibility
/** 
 * Compatibility information.
**/
export class Compatibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterVersion" })
  clusterVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultVersion" })
  defaultVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=platformVersions" })
  platformVersions?: string[];
}
