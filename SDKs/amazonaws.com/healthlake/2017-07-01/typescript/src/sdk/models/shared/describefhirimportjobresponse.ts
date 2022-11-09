import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportJobProperties } from "./importjobproperties";


export class DescribeFhirImportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportJobProperties" })
  importJobProperties: ImportJobProperties;
}
