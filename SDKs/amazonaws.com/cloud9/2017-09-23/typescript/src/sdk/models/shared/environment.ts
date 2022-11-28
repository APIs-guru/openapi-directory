import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { EnvironmentLifecycle } from "./environmentlifecycle";
import { ManagedCredentialsStatusEnum } from "./managedcredentialsstatusenum";
import { EnvironmentTypeEnum } from "./environmenttypeenum";



// Environment
/** 
 * Information about an Cloud9 development environment.
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=connectionType" })
  connectionType?: ConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycle" })
  lifecycle?: EnvironmentLifecycle;

  @SpeakeasyMetadata({ data: "json, name=managedCredentialsStatus" })
  managedCredentialsStatus?: ManagedCredentialsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerArn" })
  ownerArn: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: EnvironmentTypeEnum;
}
