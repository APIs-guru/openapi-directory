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
	Account   *string `json:"account"`
	ID        *string `json:"id"`
	Jti       *string `json:"jti"`
	RequestIP *string `json:"requestIp"`
	UserAgent *string `json:"userAgent"`
}

type APIRequestResourceItem struct {
	ID *string `json:"id"`
}

type APIRequestResourceTypeEnum string

const (
	APIRequestResourceTypeEnumItem  APIRequestResourceTypeEnum = "ITEM"
	APIRequestResourceTypeEnumVault APIRequestResourceTypeEnum = "VAULT"
)

type APIRequestResourceVault struct {
	ID *string `json:"id"`
}

type APIRequestResource struct {
	Item        *APIRequestResourceItem     `json:"item"`
	ItemVersion *int64                      `json:"itemVersion"`
	Type        *APIRequestResourceTypeEnum `json:"type"`
	Vault       *APIRequestResourceVault    `json:"vault"`
}

type APIRequestResultEnum string

const (
	APIRequestResultEnumSuccess APIRequestResultEnum = "SUCCESS"
	APIRequestResultEnumDeny    APIRequestResultEnum = "DENY"
)

type APIRequest struct {
	Action    *APIRequestActionEnum `json:"action"`
	Actor     *APIRequestActor      `json:"actor"`
	RequestID *string               `json:"requestId"`
	Resource  *APIRequestResource   `json:"resource"`
	Result    *APIRequestResultEnum `json:"result"`
	Timestamp *time.Time            `json:"timestamp"`
}
