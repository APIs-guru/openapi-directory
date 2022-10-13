package shared

type VpcLink struct {
	Description   *string            `json:"description"`
	ID            *string            `json:"id"`
	Name          *string            `json:"name"`
	Status        *VpcLinkStatusEnum `json:"status"`
	StatusMessage *string            `json:"statusMessage"`
	Tags          map[string]string  `json:"tags"`
	TargetArns    []string           `json:"targetArns"`
}
