package shared

import (
	"time"
)

type MitigationActionIdentifier struct {
	ActionArn    *string    `json:"actionArn"`
	ActionName   *string    `json:"actionName"`
	CreationDate *time.Time `json:"creationDate"`
}
