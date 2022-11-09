import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TierEnum } from "./tierenum";


export class DescribeComponentConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComponentConfiguration" })
  componentConfiguration?: string;

  @Metadata({ data: "json, name=Monitor" })
  monitor?: boolean;

  @Metadata({ data: "json, name=Tier" })
  tier?: TierEnum;
}
