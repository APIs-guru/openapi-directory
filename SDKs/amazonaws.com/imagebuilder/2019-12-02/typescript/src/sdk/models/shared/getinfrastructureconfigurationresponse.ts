import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InfrastructureConfiguration } from "./infrastructureconfiguration";



// GetInfrastructureConfigurationResponse
/** 
 * GetInfrastructureConfiguration response object.
**/
export class GetInfrastructureConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=infrastructureConfiguration" })
  infrastructureConfiguration?: InfrastructureConfiguration;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
