import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// InstanceInfo
/** 
 * Information about an on-premises instance.
**/
export class InstanceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=deregisterTime" })
  deregisterTime?: Date;

  @Metadata({ data: "json, name=iamSessionArn" })
  iamSessionArn?: string;

  @Metadata({ data: "json, name=iamUserArn" })
  iamUserArn?: string;

  @Metadata({ data: "json, name=instanceArn" })
  instanceArn?: string;

  @Metadata({ data: "json, name=instanceName" })
  instanceName?: string;

  @Metadata({ data: "json, name=registerTime" })
  registerTime?: Date;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
