import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GluePolicy
/** 
 * A structure for returning a resource policy.
**/
export class GluePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=PolicyHash" })
  policyHash?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyInJson" })
  policyInJson?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime?: Date;
}
