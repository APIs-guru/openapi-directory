package shared

type AddonIssue struct {
	Code        *AddonIssueCodeEnum `json:"code"`
	Message     *string             `json:"message"`
	ResourceIds []string            `json:"resourceIds"`
}
