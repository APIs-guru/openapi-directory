package shared

import (
	"time"
)

// Finding
// Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action.
type Finding struct {
	Arn                   string                      `json:"arn"`
	AssetAttributes       *AssetAttributes            `json:"assetAttributes,omitempty"`
	AssetType             *AssetTypeEnum              `json:"assetType,omitempty"`
	Attributes            []Attribute                 `json:"attributes"`
	Confidence            *int64                      `json:"confidence,omitempty"`
	CreatedAt             time.Time                   `json:"createdAt"`
	Description           *string                     `json:"description,omitempty"`
	ID                    *string                     `json:"id,omitempty"`
	IndicatorOfCompromise *bool                       `json:"indicatorOfCompromise,omitempty"`
	NumericSeverity       *float64                    `json:"numericSeverity,omitempty"`
	Recommendation        *string                     `json:"recommendation,omitempty"`
	SchemaVersion         *int64                      `json:"schemaVersion,omitempty"`
	Service               *string                     `json:"service,omitempty"`
	ServiceAttributes     *InspectorServiceAttributes `json:"serviceAttributes,omitempty"`
	Severity              *SeverityEnum               `json:"severity,omitempty"`
	Title                 *string                     `json:"title,omitempty"`
	UpdatedAt             time.Time                   `json:"updatedAt"`
	UserAttributes        []Attribute                 `json:"userAttributes"`
}
