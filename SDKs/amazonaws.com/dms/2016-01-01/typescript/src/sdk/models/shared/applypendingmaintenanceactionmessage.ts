import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplyPendingMaintenanceActionMessage
/** 
 * <p/>
**/
export class ApplyPendingMaintenanceActionMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplyAction" })
  applyAction: string;

  @Metadata({ data: "json, name=OptInType" })
  optInType: string;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
