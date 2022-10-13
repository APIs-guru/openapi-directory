package shared

import (
	"time"
)

type TransformFilterCriteria struct {
	CreatedAfter       *time.Time               `json:"CreatedAfter"`
	CreatedBefore      *time.Time               `json:"CreatedBefore"`
	GlueVersion        *string                  `json:"GlueVersion"`
	LastModifiedAfter  *time.Time               `json:"LastModifiedAfter"`
	LastModifiedBefore *time.Time               `json:"LastModifiedBefore"`
	Name               *string                  `json:"Name"`
	Schema             []SchemaColumn           `json:"Schema"`
	Status             *TransformStatusTypeEnum `json:"Status"`
	TransformType      *TransformTypeEnum       `json:"TransformType"`
}
