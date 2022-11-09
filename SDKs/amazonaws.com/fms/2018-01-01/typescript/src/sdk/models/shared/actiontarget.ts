import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionTarget
/** 
 * Describes a remediation action target.
**/
export class ActionTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
