import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptInStatusEnum } from "./optinstatusenum";



// OpsCenterIntegrationConfig
/** 
 *  Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight. 
**/
export class OpsCenterIntegrationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OptInStatus" })
  optInStatus?: OptInStatusEnum;
}
