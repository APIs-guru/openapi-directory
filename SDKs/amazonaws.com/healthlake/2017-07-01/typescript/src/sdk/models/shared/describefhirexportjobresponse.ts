import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportJobProperties } from "./exportjobproperties";



export class DescribeFhirExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportJobProperties" })
  exportJobProperties: ExportJobProperties;
}
