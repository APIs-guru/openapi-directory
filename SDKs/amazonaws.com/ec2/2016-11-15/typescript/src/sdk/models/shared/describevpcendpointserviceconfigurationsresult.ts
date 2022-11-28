import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceConfiguration } from "./serviceconfiguration";



export class DescribeVpcEndpointServiceConfigurationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ServiceConfiguration })
  serviceConfigurations?: ServiceConfiguration[];
}
