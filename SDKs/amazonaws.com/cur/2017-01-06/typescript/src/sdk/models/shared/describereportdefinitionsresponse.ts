import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportDefinition } from "./reportdefinition";



// DescribeReportDefinitionsResponse
/** 
 * If the action is successful, the service sends back an HTTP 200 response.
**/
export class DescribeReportDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportDefinitions", elemType: ReportDefinition })
  reportDefinitions?: ReportDefinition[];
}
