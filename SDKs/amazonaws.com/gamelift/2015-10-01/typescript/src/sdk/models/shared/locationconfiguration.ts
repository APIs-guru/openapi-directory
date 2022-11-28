import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocationConfiguration
/** 
 * <p>A remote location where a multi-location fleet can deploy EC2 instances for game hosting. </p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> </p>
**/
export class LocationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;
}
