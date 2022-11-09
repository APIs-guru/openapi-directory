import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteReportDefinitionResponse
/** 
 * If the action is successful, the service sends back an HTTP 200 response.
**/
export class DeleteReportDefinitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResponseMessage" })
  responseMessage?: string;
}
