package shared

type CheckConnectionReadStatusEnum string

const (
	CheckConnectionReadStatusEnumSucceeded CheckConnectionReadStatusEnum = "succeeded"
	CheckConnectionReadStatusEnumFailed    CheckConnectionReadStatusEnum = "failed"
)

type CheckConnectionRead struct {
	JobInfo SynchronousJobRead            `json:"jobInfo"`
	Message *string                       `json:"message"`
	Status  CheckConnectionReadStatusEnum `json:"status"`
}
