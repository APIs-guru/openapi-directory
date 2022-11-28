import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsCenterIntegration } from "./opscenterintegration";



// ServiceIntegrationConfig
/** 
 *  Information about the integration of DevOps Guru with another AWS service, such as AWS Systems Manager. 
**/
export class ServiceIntegrationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OpsCenter" })
  opsCenter?: OpsCenterIntegration;
}
