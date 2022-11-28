import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddonHealth } from "./addonhealth";
import { AddonStatusEnum } from "./addonstatusenum";



// Addon
/** 
 * An Amazon EKS add-on.
**/
export class Addon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addonArn" })
  addonArn?: string;

  @SpeakeasyMetadata({ data: "json, name=addonName" })
  addonName?: string;

  @SpeakeasyMetadata({ data: "json, name=addonVersion" })
  addonVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: AddonHealth;

  @SpeakeasyMetadata({ data: "json, name=modifiedAt" })
  modifiedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountRoleArn" })
  serviceAccountRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AddonStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
