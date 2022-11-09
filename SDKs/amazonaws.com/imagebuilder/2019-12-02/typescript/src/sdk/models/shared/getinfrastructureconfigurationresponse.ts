import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InfrastructureConfiguration } from "./infrastructureconfiguration";


// GetInfrastructureConfigurationResponse
/** 
 * GetInfrastructureConfiguration response object.
**/
export class GetInfrastructureConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=infrastructureConfiguration" })
  infrastructureConfiguration?: InfrastructureConfiguration;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
