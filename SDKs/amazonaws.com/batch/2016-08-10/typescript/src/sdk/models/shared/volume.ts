import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EfsVolumeConfiguration } from "./efsvolumeconfiguration";
import { Host } from "./host";


// Volume
/** 
 * A data volume used in a job's container properties.
**/
export class Volume extends SpeakeasyBase {
  @Metadata({ data: "json, name=efsVolumeConfiguration" })
  efsVolumeConfiguration?: EfsVolumeConfiguration;

  @Metadata({ data: "json, name=host" })
  host?: Host;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
