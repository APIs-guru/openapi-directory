package shared

type Issue struct {
	Code        *NodegroupIssueCodeEnum `json:"code"`
	Message     *string                 `json:"message"`
	ResourceIds []string                `json:"resourceIds"`
}
