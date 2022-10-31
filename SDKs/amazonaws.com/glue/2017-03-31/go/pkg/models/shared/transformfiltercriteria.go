package shared

import (
"time")

type TransformFilterCriteria struct {
    CreatedAfter *time.Time `json:"CreatedAfter,omitempty"`
    CreatedBefore *time.Time `json:"CreatedBefore,omitempty"`
    GlueVersion *string `json:"GlueVersion,omitempty"`
    LastModifiedAfter *time.Time `json:"LastModifiedAfter,omitempty"`
    LastModifiedBefore *time.Time `json:"LastModifiedBefore,omitempty"`
    Name *string `json:"Name,omitempty"`
    Schema []SchemaColumn `json:"Schema,omitempty"`
    Status *TransformStatusTypeEnum `json:"Status,omitempty"`
    TransformType *TransformTypeEnum `json:"TransformType,omitempty"`
    
}

