import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExportJobProperties } from "./exportjobproperties";


export class ListFhirExportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExportJobPropertiesList", elemType: shared.ExportJobProperties })
  exportJobPropertiesList: ExportJobProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
