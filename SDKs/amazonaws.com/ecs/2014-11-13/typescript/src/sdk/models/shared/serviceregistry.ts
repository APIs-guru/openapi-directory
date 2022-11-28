import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceRegistry
/** 
 * Details of the service registry.
**/
export class ServiceRegistry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=containerPort" })
  containerPort?: number;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=registryArn" })
  registryArn?: string;
}
