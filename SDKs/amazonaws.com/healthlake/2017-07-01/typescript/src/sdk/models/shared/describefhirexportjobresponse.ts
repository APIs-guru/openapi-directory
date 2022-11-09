import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportJobProperties } from "./exportjobproperties";


export class DescribeFhirExportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExportJobProperties" })
  exportJobProperties: ExportJobProperties;
}
