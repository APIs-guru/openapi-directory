import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocaleEnum } from "./localeenum";


export class DescribeRulesPackagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=locale" })
  locale?: LocaleEnum;

  @Metadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns: string[];
}
