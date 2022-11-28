import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RulesPackage
/** 
 * Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action.
**/
export class RulesPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
