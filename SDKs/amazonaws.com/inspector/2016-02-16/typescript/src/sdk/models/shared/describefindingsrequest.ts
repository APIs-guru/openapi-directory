import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocaleEnum } from "./localeenum";


export class DescribeFindingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=findingArns" })
  findingArns: string[];

  @Metadata({ data: "json, name=locale" })
  locale?: LocaleEnum;
}
