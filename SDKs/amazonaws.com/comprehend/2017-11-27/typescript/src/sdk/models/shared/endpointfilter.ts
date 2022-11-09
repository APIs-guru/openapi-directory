import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointStatusEnum } from "./endpointstatusenum";


// EndpointFilter
/** 
 * The filter used to determine which endpoints are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time. 
**/
export class EndpointFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=ModelArn" })
  modelArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: EndpointStatusEnum;
}
