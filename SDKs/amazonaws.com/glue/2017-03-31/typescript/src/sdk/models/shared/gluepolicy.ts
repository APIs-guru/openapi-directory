import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GluePolicy
/** 
 * A structure for returning a resource policy.
**/
export class GluePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=PolicyHash" })
  policyHash?: string;

  @Metadata({ data: "json, name=PolicyInJson" })
  policyInJson?: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime?: Date;
}
