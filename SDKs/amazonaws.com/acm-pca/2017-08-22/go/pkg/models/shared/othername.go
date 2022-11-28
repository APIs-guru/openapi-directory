package shared

// OtherName
// Defines a custom ASN.1 X.400 <code>GeneralName</code> using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.
type OtherName struct {
	TypeID string `json:"TypeId"`
	Value  string `json:"Value"`
}
