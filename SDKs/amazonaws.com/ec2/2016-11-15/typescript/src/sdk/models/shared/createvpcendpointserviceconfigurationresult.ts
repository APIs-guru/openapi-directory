import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceConfiguration } from "./serviceconfiguration";



export class CreateVpcEndpointServiceConfigurationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  serviceConfiguration?: ServiceConfiguration;
}
