import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdFormat } from "./idformat";



// PrincipalIdFormat
/** 
 * PrincipalIdFormat description
**/
export class PrincipalIdFormat extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata({ elemType: IdFormat })
  statuses?: IdFormat[];
}
