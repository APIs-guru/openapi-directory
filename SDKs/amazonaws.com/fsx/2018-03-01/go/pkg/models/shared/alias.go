package shared

type Alias struct {
	Lifecycle *AliasLifecycleEnum `json:"Lifecycle,omitempty"`
	Name      *string             `json:"Name,omitempty"`
}
