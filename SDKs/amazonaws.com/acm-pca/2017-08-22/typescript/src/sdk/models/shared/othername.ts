import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OtherName
/** 
 * Defines a custom ASN.1 X.400 <code>GeneralName</code> using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.
**/
export class OtherName extends SpeakeasyBase {
  @Metadata({ data: "json, name=TypeId" })
  typeId: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
