import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocaleEnum } from "./localeenum";



export class DescribeExclusionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclusionArns" })
  exclusionArns: string[];

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: LocaleEnum;
}
