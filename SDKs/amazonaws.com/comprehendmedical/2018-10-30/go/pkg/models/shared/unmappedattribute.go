package shared

type UnmappedAttribute struct {
	Attribute *Attribute      `json:"Attribute"`
	Type      *EntityTypeEnum `json:"Type"`
}
