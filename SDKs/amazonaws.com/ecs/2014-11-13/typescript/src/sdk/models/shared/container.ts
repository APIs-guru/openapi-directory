import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HealthStatusEnum } from "./healthstatusenum";
import { ManagedAgent } from "./managedagent";
import { NetworkBinding } from "./networkbinding";
import { NetworkInterface } from "./networkinterface";


// Container
/** 
 * A Docker container that is part of a task.
**/
export class Container extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerArn" })
  containerArn?: string;

  @Metadata({ data: "json, name=cpu" })
  cpu?: string;

  @Metadata({ data: "json, name=exitCode" })
  exitCode?: number;

  @Metadata({ data: "json, name=gpuIds" })
  gpuIds?: string[];

  @Metadata({ data: "json, name=healthStatus" })
  healthStatus?: HealthStatusEnum;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @Metadata({ data: "json, name=lastStatus" })
  lastStatus?: string;

  @Metadata({ data: "json, name=managedAgents", elemType: shared.ManagedAgent })
  managedAgents?: ManagedAgent[];

  @Metadata({ data: "json, name=memory" })
  memory?: string;

  @Metadata({ data: "json, name=memoryReservation" })
  memoryReservation?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkBindings", elemType: shared.NetworkBinding })
  networkBindings?: NetworkBinding[];

  @Metadata({ data: "json, name=networkInterfaces", elemType: shared.NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=runtimeId" })
  runtimeId?: string;

  @Metadata({ data: "json, name=taskArn" })
  taskArn?: string;
}
