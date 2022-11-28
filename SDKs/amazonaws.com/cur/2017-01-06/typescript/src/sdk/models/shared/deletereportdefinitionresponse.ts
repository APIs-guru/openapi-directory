import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteReportDefinitionResponse
/** 
 * If the action is successful, the service sends back an HTTP 200 response.
**/
export class DeleteReportDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResponseMessage" })
  responseMessage?: string;
}
