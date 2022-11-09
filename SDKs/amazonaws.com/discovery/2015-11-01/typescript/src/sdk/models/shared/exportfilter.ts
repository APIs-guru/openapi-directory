import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExportFilter
/** 
 * Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.
**/
export class ExportFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
