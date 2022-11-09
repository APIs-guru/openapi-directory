import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RulesPackage
/** 
 * Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action.
**/
export class RulesPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=provider" })
  provider: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}
