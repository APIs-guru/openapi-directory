import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsPackage } from "./updatesystemmodelspackage";



export class UpdateSystemModelsCheckinResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Packages", elemType: UpdateSystemModelsPackage })
  packages?: UpdateSystemModelsPackage[];

  @SpeakeasyMetadata({ data: "json, name=RemovePackages" })
  removePackages?: string[];
}
