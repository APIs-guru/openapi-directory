import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnableHybridValuesEnum } from "./enablehybridvaluesenum";
import { ExistConditionEnum } from "./existconditionenum";


export class PutResourcePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnableHybrid" })
  enableHybrid?: EnableHybridValuesEnum;

  @Metadata({ data: "json, name=PolicyExistsCondition" })
  policyExistsCondition?: ExistConditionEnum;

  @Metadata({ data: "json, name=PolicyHashCondition" })
  policyHashCondition?: string;

  @Metadata({ data: "json, name=PolicyInJson" })
  policyInJson: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;
}
