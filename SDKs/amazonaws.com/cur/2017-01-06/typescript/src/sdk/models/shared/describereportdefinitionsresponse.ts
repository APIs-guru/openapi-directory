import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportDefinition } from "./reportdefinition";


// DescribeReportDefinitionsResponse
/** 
 * If the action is successful, the service sends back an HTTP 200 response.
**/
export class DescribeReportDefinitionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ReportDefinitions", elemType: shared.ReportDefinition })
  reportDefinitions?: ReportDefinition[];
}
