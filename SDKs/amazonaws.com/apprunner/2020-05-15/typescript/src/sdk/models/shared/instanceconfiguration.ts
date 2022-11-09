import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceConfiguration
/** 
 * Describes the runtime configuration of an AWS App Runner service instance (scaling unit).
**/
export class InstanceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cpu" })
  cpu?: string;

  @Metadata({ data: "json, name=InstanceRoleArn" })
  instanceRoleArn?: string;

  @Metadata({ data: "json, name=Memory" })
  memory?: string;
}
