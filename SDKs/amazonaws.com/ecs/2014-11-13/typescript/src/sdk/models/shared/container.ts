import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HealthStatusEnum } from "./healthstatusenum";
import { ManagedAgent } from "./managedagent";
import { NetworkBinding } from "./networkbinding";
import { NetworkInterface } from "./networkinterface";



// Container
/** 
 * A Docker container that is part of a task.
**/
export class Container extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerArn" })
  containerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: string;

  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @SpeakeasyMetadata({ data: "json, name=gpuIds" })
  gpuIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=healthStatus" })
  healthStatus?: HealthStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=lastStatus" })
  lastStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=managedAgents", elemType: ManagedAgent })
  managedAgents?: ManagedAgent[];

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: string;

  @SpeakeasyMetadata({ data: "json, name=memoryReservation" })
  memoryReservation?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkBindings", elemType: NetworkBinding })
  networkBindings?: NetworkBinding[];

  @SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeId" })
  runtimeId?: string;

  @SpeakeasyMetadata({ data: "json, name=taskArn" })
  taskArn?: string;
}
