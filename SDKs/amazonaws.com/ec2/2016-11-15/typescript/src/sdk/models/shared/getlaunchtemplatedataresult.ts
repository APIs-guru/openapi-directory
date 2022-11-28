import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseLaunchTemplateData } from "./responselaunchtemplatedata";



export class GetLaunchTemplateDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateData?: ResponseLaunchTemplateData;
}
