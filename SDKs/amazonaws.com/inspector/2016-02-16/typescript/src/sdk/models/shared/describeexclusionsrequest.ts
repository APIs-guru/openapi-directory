import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocaleEnum } from "./localeenum";


export class DescribeExclusionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclusionArns" })
  exclusionArns: string[];

  @Metadata({ data: "json, name=locale" })
  locale?: LocaleEnum;
}
