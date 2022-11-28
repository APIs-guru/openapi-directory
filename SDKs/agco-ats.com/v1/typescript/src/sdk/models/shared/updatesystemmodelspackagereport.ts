import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsCategory } from "./updatesystemmodelscategory";



export class UpdateSystemModelsPackageReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Categories", elemType: UpdateSystemModelsCategory })
  categories?: UpdateSystemModelsCategory[];

  @SpeakeasyMetadata({ data: "json, name=PackageDescription" })
  packageDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=PackageID" })
  packageId?: string;
}
