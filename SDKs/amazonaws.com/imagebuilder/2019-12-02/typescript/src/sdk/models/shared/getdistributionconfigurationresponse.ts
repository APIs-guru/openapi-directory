import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionConfiguration } from "./distributionconfiguration";



export class GetDistributionConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributionConfiguration" })
  distributionConfiguration?: DistributionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
