import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkBinding } from "./networkbinding";



// ContainerStateChange
/** 
 * An object representing a change in state for a container.
**/
export class ContainerStateChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @SpeakeasyMetadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=networkBindings", elemType: NetworkBinding })
  networkBindings?: NetworkBinding[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeId" })
  runtimeId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
