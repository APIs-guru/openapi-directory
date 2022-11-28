import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportJobProperties } from "./exportjobproperties";



export class ListFhirExportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportJobPropertiesList", elemType: ExportJobProperties })
  exportJobPropertiesList: ExportJobProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
