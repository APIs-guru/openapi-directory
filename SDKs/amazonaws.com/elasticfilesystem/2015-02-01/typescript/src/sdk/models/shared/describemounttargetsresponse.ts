import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MountTargetDescription } from "./mounttargetdescription";



// DescribeMountTargetsResponse
/** 
 * <p/>
**/
export class DescribeMountTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MountTargets", elemType: MountTargetDescription })
  mountTargets?: MountTargetDescription[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
