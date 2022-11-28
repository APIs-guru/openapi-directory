package shared

import (
	"time"
)

// UserDefinedFunction
// Represents the equivalent of a Hive user-defined function (<code>UDF</code>) definition.
type UserDefinedFunction struct {
	CatalogID    *string            `json:"CatalogId,omitempty"`
	ClassName    *string            `json:"ClassName,omitempty"`
	CreateTime   *time.Time         `json:"CreateTime,omitempty"`
	DatabaseName *string            `json:"DatabaseName,omitempty"`
	FunctionName *string            `json:"FunctionName,omitempty"`
	OwnerName    *string            `json:"OwnerName,omitempty"`
	OwnerType    *PrincipalTypeEnum `json:"OwnerType,omitempty"`
	ResourceUris []ResourceURI      `json:"ResourceUris,omitempty"`
}
