package shared

import (
	"time"
)

type AssetModelSummary struct {
	Arn            string           `json:"arn"`
	CreationDate   time.Time        `json:"creationDate"`
	Description    string           `json:"description"`
	ID             string           `json:"id"`
	LastUpdateDate time.Time        `json:"lastUpdateDate"`
	Name           string           `json:"name"`
	Status         AssetModelStatus `json:"status"`
}
