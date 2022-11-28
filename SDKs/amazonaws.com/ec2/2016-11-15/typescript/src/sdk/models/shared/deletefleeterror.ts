import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteFleetErrorCodeEnum } from "./deletefleeterrorcodeenum";



// DeleteFleetError
/** 
 * Describes an EC2 Fleet error.
**/
export class DeleteFleetError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: DeleteFleetErrorCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}
