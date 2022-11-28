import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedItemDetails } from "./faileditemdetails";
import { RulesPackage } from "./rulespackage";



export class DescribeRulesPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedItems", elemType: FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;

  @SpeakeasyMetadata({ data: "json, name=rulesPackages", elemType: RulesPackage })
  rulesPackages: RulesPackage[];
}
