import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DistributionConfiguration } from "./distributionconfiguration";


export class GetDistributionConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributionConfiguration" })
  distributionConfiguration?: DistributionConfiguration;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
