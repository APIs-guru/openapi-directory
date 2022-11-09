import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceIntegrationConfig } from "./serviceintegrationconfig";


export class DescribeServiceIntegrationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceIntegration" })
  serviceIntegration?: ServiceIntegrationConfig;
}
