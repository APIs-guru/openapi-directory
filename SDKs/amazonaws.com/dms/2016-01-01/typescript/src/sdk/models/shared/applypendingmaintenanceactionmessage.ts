import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplyPendingMaintenanceActionMessage
/** 
 * <p/>
**/
export class ApplyPendingMaintenanceActionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplyAction" })
  applyAction: string;

  @SpeakeasyMetadata({ data: "json, name=OptInType" })
  optInType: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
