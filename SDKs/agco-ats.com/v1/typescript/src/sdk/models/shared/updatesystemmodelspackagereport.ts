import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsCategory } from "./updatesystemmodelscategory";


export class UpdateSystemModelsPackageReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=Categories", elemType: shared.UpdateSystemModelsCategory })
  categories?: UpdateSystemModelsCategory[];

  @Metadata({ data: "json, name=PackageDescription" })
  packageDescription?: string;

  @Metadata({ data: "json, name=PackageID" })
  packageId?: string;
}
