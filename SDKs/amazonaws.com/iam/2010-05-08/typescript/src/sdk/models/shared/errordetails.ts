import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorDetails
/** 
 * <p>Contains information about the reason that the operation failed.</p> <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
**/
export class ErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code: string;

  @SpeakeasyMetadata()
  message: string;
}
