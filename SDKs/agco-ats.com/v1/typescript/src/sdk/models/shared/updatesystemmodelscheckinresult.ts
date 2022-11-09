import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsPackage } from "./updatesystemmodelspackage";


export class UpdateSystemModelsCheckinResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Packages", elemType: shared.UpdateSystemModelsPackage })
  packages?: UpdateSystemModelsPackage[];

  @Metadata({ data: "json, name=RemovePackages" })
  removePackages?: string[];
}
