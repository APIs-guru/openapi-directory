package shared

type ImportReadStatusEnum string

const (
	ImportReadStatusEnumSucceeded ImportReadStatusEnum = "succeeded"
	ImportReadStatusEnumFailed    ImportReadStatusEnum = "failed"
)

type ImportRead struct {
	Reason *string              `json:"reason,omitempty"`
	Status ImportReadStatusEnum `json:"status"`
}
