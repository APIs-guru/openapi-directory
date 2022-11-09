import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddonHealth } from "./addonhealth";
import { AddonStatusEnum } from "./addonstatusenum";


// Addon
/** 
 * An Amazon EKS add-on.
**/
export class Addon extends SpeakeasyBase {
  @Metadata({ data: "json, name=addonArn" })
  addonArn?: string;

  @Metadata({ data: "json, name=addonName" })
  addonName?: string;

  @Metadata({ data: "json, name=addonVersion" })
  addonVersion?: string;

  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=health" })
  health?: AddonHealth;

  @Metadata({ data: "json, name=modifiedAt" })
  modifiedAt?: Date;

  @Metadata({ data: "json, name=serviceAccountRoleArn" })
  serviceAccountRoleArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: AddonStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
