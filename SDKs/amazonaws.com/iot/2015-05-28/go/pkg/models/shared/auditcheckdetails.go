package shared

type AuditCheckDetails struct {
	CheckCompliant                       *bool                    `json:"checkCompliant"`
	CheckRunStatus                       *AuditCheckRunStatusEnum `json:"checkRunStatus"`
	ErrorCode                            *string                  `json:"errorCode"`
	Message                              *string                  `json:"message"`
	NonCompliantResourcesCount           *int64                   `json:"nonCompliantResourcesCount"`
	SuppressedNonCompliantResourcesCount *int64                   `json:"suppressedNonCompliantResourcesCount"`
	TotalResourcesCount                  *int64                   `json:"totalResourcesCount"`
}
