package shared

import (
	"time"
)

type UserDefinedFunction struct {
	CatalogID    *string            `json:"CatalogId"`
	ClassName    *string            `json:"ClassName"`
	CreateTime   *time.Time         `json:"CreateTime"`
	DatabaseName *string            `json:"DatabaseName"`
	FunctionName *string            `json:"FunctionName"`
	OwnerName    *string            `json:"OwnerName"`
	OwnerType    *PrincipalTypeEnum `json:"OwnerType"`
	ResourceUris []ResourceURI      `json:"ResourceUris"`
}
