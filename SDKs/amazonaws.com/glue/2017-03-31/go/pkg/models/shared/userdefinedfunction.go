package shared

import (
	"time"
)

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
