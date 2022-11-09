import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsPackageStatus } from "./updatesystemmodelspackagestatus";


export class UpdateSystemModelsPackageStatusSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AverageDownloadTime" })
  averageDownloadTime?: string;

  @Metadata({ data: "json, name=AverageInstallTime" })
  averageInstallTime?: string;

  @Metadata({ data: "json, name=Downloaded" })
  downloaded?: number;

  @Metadata({ data: "json, name=Error" })
  error?: number;

  @Metadata({ data: "json, name=Installed" })
  installed?: number;

  @Metadata({ data: "json, name=Package" })
  package?: string;

  @Metadata({ data: "json, name=PackageID" })
  packageId?: string;

  @Metadata({ data: "json, name=PackageStatusItems", elemType: shared.UpdateSystemModelsPackageStatus })
  packageStatusItems?: UpdateSystemModelsPackageStatus[];
}
