import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportJobProperties } from "./importjobproperties";



export class ListFhirImportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImportJobPropertiesList", elemType: ImportJobProperties })
  importJobPropertiesList: ImportJobProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
