import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnableHybridValuesEnum } from "./enablehybridvaluesenum";
import { ExistConditionEnum } from "./existconditionenum";



export class PutResourcePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnableHybrid" })
  enableHybrid?: EnableHybridValuesEnum;

  @SpeakeasyMetadata({ data: "json, name=PolicyExistsCondition" })
  policyExistsCondition?: ExistConditionEnum;

  @SpeakeasyMetadata({ data: "json, name=PolicyHashCondition" })
  policyHashCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyInJson" })
  policyInJson: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;
}
