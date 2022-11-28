import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceIntegrationConfig } from "./serviceintegrationconfig";



export class DescribeServiceIntegrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceIntegration" })
  serviceIntegration?: ServiceIntegrationConfig;
}
