import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedItemDetails } from "./faileditemdetails";
import { RulesPackage } from "./rulespackage";


export class DescribeRulesPackagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedItems", elemType: shared.FailedItemDetails })
  failedItems: Map<string, FailedItemDetails>;

  @Metadata({ data: "json, name=rulesPackages", elemType: shared.RulesPackage })
  rulesPackages: RulesPackage[];
}
