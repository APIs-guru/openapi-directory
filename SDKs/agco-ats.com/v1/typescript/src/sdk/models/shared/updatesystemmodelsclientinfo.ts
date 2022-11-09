import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsPackageReport } from "./updatesystemmodelspackagereport";


export class UpdateSystemModelsClientInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientID" })
  clientId?: string;

  @Metadata({ data: "json, name=Package", elemType: shared.UpdateSystemModelsPackageReport })
  package?: UpdateSystemModelsPackageReport[];
}
