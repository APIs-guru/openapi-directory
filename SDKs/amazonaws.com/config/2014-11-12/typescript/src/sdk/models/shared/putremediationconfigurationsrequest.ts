import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationConfiguration } from "./remediationconfiguration";



export class PutRemediationConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RemediationConfigurations", elemType: RemediationConfiguration })
  remediationConfigurations: RemediationConfiguration[];
}
