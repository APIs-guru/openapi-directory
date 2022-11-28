import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocaleEnum } from "./localeenum";



export class DescribeRulesPackagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: LocaleEnum;

  @SpeakeasyMetadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns: string[];
}
