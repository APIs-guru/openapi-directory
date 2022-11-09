import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.
**/
export declare class ExportFilter extends SpeakeasyBase {
    condition: string;
    name: string;
    values: string[];
}
