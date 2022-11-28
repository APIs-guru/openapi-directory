import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportFilter
/** 
 * Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.
**/
export class ExportFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
