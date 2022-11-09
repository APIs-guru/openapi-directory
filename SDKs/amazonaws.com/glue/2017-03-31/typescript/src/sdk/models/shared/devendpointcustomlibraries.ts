import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DevEndpointCustomLibraries
/** 
 * Custom libraries to be loaded into a development endpoint.
**/
export class DevEndpointCustomLibraries extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExtraJarsS3Path" })
  extraJarsS3Path?: string;

  @Metadata({ data: "json, name=ExtraPythonLibsS3Path" })
  extraPythonLibsS3Path?: string;
}
