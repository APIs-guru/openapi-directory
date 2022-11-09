import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { EnvironmentLifecycle } from "./environmentlifecycle";
import { ManagedCredentialsStatusEnum } from "./managedcredentialsstatusenum";
import { EnvironmentTypeEnum } from "./environmenttypeenum";


// Environment
/** 
 * Information about an Cloud9 development environment.
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=connectionType" })
  connectionType?: ConnectionTypeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lifecycle" })
  lifecycle?: EnvironmentLifecycle;

  @Metadata({ data: "json, name=managedCredentialsStatus" })
  managedCredentialsStatus?: ManagedCredentialsStatusEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownerArn" })
  ownerArn: string;

  @Metadata({ data: "json, name=type" })
  type: EnvironmentTypeEnum;
}
