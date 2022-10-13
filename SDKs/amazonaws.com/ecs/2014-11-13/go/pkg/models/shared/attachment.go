package shared

type Attachment struct {
	Details []KeyValuePair `json:"details"`
	ID      *string        `json:"id"`
	Status  *string        `json:"status"`
	Type    *string        `json:"type"`
}
