package shared

// UnmappedAttribute
//
//	An attribute that we extracted, but were unable to relate to an entity.
type UnmappedAttribute struct {
	Attribute *Attribute      `json:"Attribute,omitempty"`
	Type      *EntityTypeEnum `json:"Type,omitempty"`
}
