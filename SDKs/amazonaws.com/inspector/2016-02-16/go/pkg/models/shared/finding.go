package shared

import (
	"time"
)

type Finding struct {
	Arn                   string                      `json:"arn"`
	AssetAttributes       *AssetAttributes            `json:"assetAttributes"`
	AssetType             *AssetTypeEnum              `json:"assetType"`
	Attributes            []Attribute                 `json:"attributes"`
	Confidence            *int64                      `json:"confidence"`
	CreatedAt             time.Time                   `json:"createdAt"`
	Description           *string                     `json:"description"`
	ID                    *string                     `json:"id"`
	IndicatorOfCompromise *bool                       `json:"indicatorOfCompromise"`
	NumericSeverity       *float64                    `json:"numericSeverity"`
	Recommendation        *string                     `json:"recommendation"`
	SchemaVersion         *int64                      `json:"schemaVersion"`
	Service               *string                     `json:"service"`
	ServiceAttributes     *InspectorServiceAttributes `json:"serviceAttributes"`
	Severity              *SeverityEnum               `json:"severity"`
	Title                 *string                     `json:"title"`
	UpdatedAt             time.Time                   `json:"updatedAt"`
	UserAttributes        []Attribute                 `json:"userAttributes"`
}
