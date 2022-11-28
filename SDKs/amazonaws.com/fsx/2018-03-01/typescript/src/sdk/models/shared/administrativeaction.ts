import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdministrativeActionTypeEnum } from "./administrativeactiontypeenum";
import { AdministrativeActionFailureDetails } from "./administrativeactionfailuredetails";
import { StatusEnum } from "./statusenum";
import { FileSystem } from "./filesystem";
import { Volume } from "./volume";



// AdministrativeAction
/** 
 * Describes a specific Amazon FSx administrative action for the current Windows or Lustre file system.
**/
export class AdministrativeAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdministrativeActionType" })
  administrativeActionType?: AdministrativeActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FailureDetails" })
  failureDetails?: AdministrativeActionFailureDetails;

  @SpeakeasyMetadata({ data: "json, name=ProgressPercent" })
  progressPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=RequestTime" })
  requestTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetFileSystemValues" })
  targetFileSystemValues?: FileSystem;

  @SpeakeasyMetadata({ data: "json, name=TargetVolumeValues" })
  targetVolumeValues?: Volume;
}
