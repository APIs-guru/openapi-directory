import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataLakePrincipal
/** 
 * The Lake Formation principal.
**/
export class DataLakePrincipal extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataLakePrincipalIdentifier" })
  dataLakePrincipalIdentifier?: string;
}
