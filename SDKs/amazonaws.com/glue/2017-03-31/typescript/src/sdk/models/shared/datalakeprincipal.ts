import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataLakePrincipal
/** 
 * The Lake Formation principal.
**/
export class DataLakePrincipal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataLakePrincipalIdentifier" })
  dataLakePrincipalIdentifier?: string;
}
