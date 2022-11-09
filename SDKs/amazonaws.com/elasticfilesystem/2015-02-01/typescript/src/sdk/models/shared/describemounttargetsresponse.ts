import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MountTargetDescription } from "./mounttargetdescription";


// DescribeMountTargetsResponse
/** 
 * <p/>
**/
export class DescribeMountTargetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MountTargets", elemType: shared.MountTargetDescription })
  mountTargets?: MountTargetDescription[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
