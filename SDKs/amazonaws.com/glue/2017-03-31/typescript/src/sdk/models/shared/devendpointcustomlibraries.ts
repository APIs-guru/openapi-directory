import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DevEndpointCustomLibraries
/** 
 * Custom libraries to be loaded into a development endpoint.
**/
export class DevEndpointCustomLibraries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExtraJarsS3Path" })
  extraJarsS3Path?: string;

  @SpeakeasyMetadata({ data: "json, name=ExtraPythonLibsS3Path" })
  extraPythonLibsS3Path?: string;
}
