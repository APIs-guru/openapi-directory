import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImportJobProperties } from "./importjobproperties";


export class ListFhirImportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportJobPropertiesList", elemType: shared.ImportJobProperties })
  importJobPropertiesList: ImportJobProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
