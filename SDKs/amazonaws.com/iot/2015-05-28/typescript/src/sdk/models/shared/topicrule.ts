import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Action } from "./action";
import { Action } from "./action";


// TopicRule
/** 
 * Describes a rule.
**/
export class TopicRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: Action[];

  @Metadata({ data: "json, name=awsIotSqlVersion" })
  awsIotSqlVersion?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=errorAction" })
  errorAction?: Action;

  @Metadata({ data: "json, name=ruleDisabled" })
  ruleDisabled?: boolean;

  @Metadata({ data: "json, name=ruleName" })
  ruleName?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;
}
