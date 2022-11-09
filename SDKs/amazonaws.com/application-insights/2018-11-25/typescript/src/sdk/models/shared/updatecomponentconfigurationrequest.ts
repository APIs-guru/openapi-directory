import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TierEnum } from "./tierenum";


export class UpdateComponentConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComponentConfiguration" })
  componentConfiguration?: string;

  @Metadata({ data: "json, name=ComponentName" })
  componentName: string;

  @Metadata({ data: "json, name=Monitor" })
  monitor?: boolean;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;

  @Metadata({ data: "json, name=Tier" })
  tier?: TierEnum;
}
