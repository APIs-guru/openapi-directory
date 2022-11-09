import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OptInStatusEnum } from "./optinstatusenum";


// OpsCenterIntegrationConfig
/** 
 *  Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight. 
**/
export class OpsCenterIntegrationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=OptInStatus" })
  optInStatus?: OptInStatusEnum;
}
