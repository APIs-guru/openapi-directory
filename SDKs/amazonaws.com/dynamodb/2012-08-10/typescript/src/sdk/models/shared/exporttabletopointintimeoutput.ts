import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportDescription } from "./exportdescription";


export class ExportTableToPointInTimeOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExportDescription" })
  exportDescription?: ExportDescription;
}
