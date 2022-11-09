import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OptInStatusEnum } from "./optinstatusenum";


// OpsCenterIntegration
/** 
 *  Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight. 
**/
export class OpsCenterIntegration extends SpeakeasyBase {
  @Metadata({ data: "json, name=OptInStatus" })
  optInStatus?: OptInStatusEnum;
}
