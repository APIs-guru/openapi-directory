import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EfaInfo
/** 
 * Describes the Elastic Fabric Adapters for the instance type.
**/
export class EfaInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  maximumEfaInterfaces?: number;
}
