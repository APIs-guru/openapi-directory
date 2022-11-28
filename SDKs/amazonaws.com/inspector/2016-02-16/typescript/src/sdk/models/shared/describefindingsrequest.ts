import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocaleEnum } from "./localeenum";



export class DescribeFindingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingArns" })
  findingArns: string[];

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: LocaleEnum;
}
