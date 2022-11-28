import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportDescription } from "./exportdescription";



export class ExportTableToPointInTimeOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportDescription" })
  exportDescription?: ExportDescription;
}
