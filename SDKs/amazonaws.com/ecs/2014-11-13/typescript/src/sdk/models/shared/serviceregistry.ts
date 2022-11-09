import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceRegistry
/** 
 * Details of the service registry.
**/
export class ServiceRegistry extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerName" })
  containerName?: string;

  @Metadata({ data: "json, name=containerPort" })
  containerPort?: number;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=registryArn" })
  registryArn?: string;
}
