import { SpeakeasyBase } from "../../../internal/utils";
import { AdministrativeActionTypeEnum } from "./administrativeactiontypeenum";
import { AdministrativeActionFailureDetails } from "./administrativeactionfailuredetails";
import { StatusEnum } from "./statusenum";
import { FileSystem } from "./filesystem";
import { Volume } from "./volume";
/**
 * Describes a specific Amazon FSx administrative action for the current Windows or Lustre file system.
**/
export declare class AdministrativeAction extends SpeakeasyBase {
    administrativeActionType?: AdministrativeActionTypeEnum;
    failureDetails?: AdministrativeActionFailureDetails;
    progressPercent?: number;
    requestTime?: Date;
    status?: StatusEnum;
    targetFileSystemValues?: FileSystem;
    targetVolumeValues?: Volume;
}
