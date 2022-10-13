package shared

type CaptionFormat struct {
	Encryption *Encryption `json:"Encryption"`
	Format     *string     `json:"Format"`
	Pattern    *string     `json:"Pattern"`
}
