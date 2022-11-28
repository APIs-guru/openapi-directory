import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsPackageReport } from "./updatesystemmodelspackagereport";



export class UpdateSystemModelsClientInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientID" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=Package", elemType: UpdateSystemModelsPackageReport })
  package?: UpdateSystemModelsPackageReport[];
}
