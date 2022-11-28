import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EfsVolumeConfiguration } from "./efsvolumeconfiguration";
import { Host } from "./host";



// Volume
/** 
 * A data volume used in a job's container properties.
**/
export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=efsVolumeConfiguration" })
  efsVolumeConfiguration?: EfsVolumeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: Host;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
