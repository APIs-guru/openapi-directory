import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TierEnum } from "./tierenum";



export class DescribeComponentConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComponentConfiguration" })
  componentConfiguration?: string;

  @SpeakeasyMetadata({ data: "json, name=Monitor" })
  monitor?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Tier" })
  tier?: TierEnum;
}
