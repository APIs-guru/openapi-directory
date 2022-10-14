package shared

import (
	"time"
)

type APIRequestActionEnum string

const (
	APIRequestActionEnumRead   APIRequestActionEnum = "READ"
	APIRequestActionEnumCreate APIRequestActionEnum = "CREATE"
	APIRequestActionEnumUpdate APIRequestActionEnum = "UPDATE"
	APIRequestActionEnumDelete APIRequestActionEnum = "DELETE"
)

type APIRequestActor struct {
	Account   *string `json:"account,omitempty"`
	ID        *string `json:"id,omitempty"`
	Jti       *string `json:"jti,omitempty"`
	RequestIP *string `json:"requestIp,omitempty"`
	UserAgent *string `json:"userAgent,omitempty"`
}

type APIRequestResourceItem struct {
	ID *string `json:"id,omitempty"`
}

type APIRequestResourceTypeEnum string

const (
	APIRequestResourceTypeEnumItem  APIRequestResourceTypeEnum = "ITEM"
	APIRequestResourceTypeEnumVault APIRequestResourceTypeEnum = "VAULT"
)

type APIRequestResourceVault struct {
	ID *string `json:"id,omitempty"`
}

type APIRequestResource struct {
	Item        *APIRequestResourceItem     `json:"item,omitempty"`
	ItemVersion *int64                      `json:"itemVersion,omitempty"`
	Type        *APIRequestResourceTypeEnum `json:"type,omitempty"`
	Vault       *APIRequestResourceVault    `json:"vault,omitempty"`
}

type APIRequestResultEnum string

const (
	APIRequestResultEnumSuccess APIRequestResultEnum = "SUCCESS"
	APIRequestResultEnumDeny    APIRequestResultEnum = "DENY"
)

type APIRequest struct {
	Action    *APIRequestActionEnum `json:"action,omitempty"`
	Actor     *APIRequestActor      `json:"actor,omitempty"`
	RequestID *string               `json:"requestId,omitempty"`
	Resource  *APIRequestResource   `json:"resource,omitempty"`
	Result    *APIRequestResultEnum `json:"result,omitempty"`
	Timestamp *time.Time            `json:"timestamp,omitempty"`
}
