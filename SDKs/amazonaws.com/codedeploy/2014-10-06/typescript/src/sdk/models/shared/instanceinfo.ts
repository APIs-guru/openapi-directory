import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// InstanceInfo
/** 
 * Information about an on-premises instance.
**/
export class InstanceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deregisterTime" })
  deregisterTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=iamSessionArn" })
  iamSessionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=iamUserArn" })
  iamUserArn?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceArn" })
  instanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=registerTime" })
  registerTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
