import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=AdministrativeActionType" })
  administrativeActionType?: AdministrativeActionTypeEnum;

  @Metadata({ data: "json, name=FailureDetails" })
  failureDetails?: AdministrativeActionFailureDetails;

  @Metadata({ data: "json, name=ProgressPercent" })
  progressPercent?: number;

  @Metadata({ data: "json, name=RequestTime" })
  requestTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: StatusEnum;

  @Metadata({ data: "json, name=TargetFileSystemValues" })
  targetFileSystemValues?: FileSystem;

  @Metadata({ data: "json, name=TargetVolumeValues" })
  targetVolumeValues?: Volume;
}
