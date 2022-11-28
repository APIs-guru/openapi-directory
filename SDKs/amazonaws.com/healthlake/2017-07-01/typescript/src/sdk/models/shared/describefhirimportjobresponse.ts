import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportJobProperties } from "./importjobproperties";



export class DescribeFhirImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImportJobProperties" })
  importJobProperties: ImportJobProperties;
}
