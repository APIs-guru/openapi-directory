package shared

type EventTypeEnum string

const (
	EventTypeEnumViewerRequest  EventTypeEnum = "viewer-request"
	EventTypeEnumViewerResponse EventTypeEnum = "viewer-response"
	EventTypeEnumOriginRequest  EventTypeEnum = "origin-request"
	EventTypeEnumOriginResponse EventTypeEnum = "origin-response"
)
