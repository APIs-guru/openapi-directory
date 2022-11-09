import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NetworkBinding } from "./networkbinding";


// ContainerStateChange
/** 
 * An object representing a change in state for a container.
**/
export class ContainerStateChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerName" })
  containerName?: string;

  @Metadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @Metadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @Metadata({ data: "json, name=networkBindings", elemType: shared.NetworkBinding })
  networkBindings?: NetworkBinding[];

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=runtimeId" })
  runtimeId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
