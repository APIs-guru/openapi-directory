import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsPackageStatus } from "./updatesystemmodelspackagestatus";



export class UpdateSystemModelsPackageStatusSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AverageDownloadTime" })
  averageDownloadTime?: string;

  @SpeakeasyMetadata({ data: "json, name=AverageInstallTime" })
  averageInstallTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Downloaded" })
  downloaded?: number;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: number;

  @SpeakeasyMetadata({ data: "json, name=Installed" })
  installed?: number;

  @SpeakeasyMetadata({ data: "json, name=Package" })
  package?: string;

  @SpeakeasyMetadata({ data: "json, name=PackageID" })
  packageId?: string;

  @SpeakeasyMetadata({ data: "json, name=PackageStatusItems", elemType: UpdateSystemModelsPackageStatus })
  packageStatusItems?: UpdateSystemModelsPackageStatus[];
}
