import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportEnvironmentEnum } from "./exportenvironmentenum";



// InstanceExportDetails
/** 
 * Describes an instance to export.
**/
export class InstanceExportDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  targetEnvironment?: ExportEnvironmentEnum;
}
