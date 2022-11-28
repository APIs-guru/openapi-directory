import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceConfiguration
/** 
 * Describes the runtime configuration of an AWS App Runner service instance (scaling unit).
**/
export class InstanceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cpu" })
  cpu?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceRoleArn" })
  instanceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Memory" })
  memory?: string;
}
