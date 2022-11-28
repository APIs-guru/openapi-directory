import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";



// TopicRule
/** 
 * Describes a rule.
**/
export class TopicRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: Action })
  actions?: Action[];

  @SpeakeasyMetadata({ data: "json, name=awsIotSqlVersion" })
  awsIotSqlVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=errorAction" })
  errorAction?: Action;

  @SpeakeasyMetadata({ data: "json, name=ruleDisabled" })
  ruleDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ruleName" })
  ruleName?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;
}
