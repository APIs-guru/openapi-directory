import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionTarget
/** 
 * Describes a remediation action target.
**/
export class ActionTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
