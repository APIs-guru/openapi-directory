package shared

import (
	"time"
)

type DescribeProjectResult struct {
	Arn                *string        `json:"arn"`
	ClientRequestToken *string        `json:"clientRequestToken"`
	CreatedTimeStamp   *time.Time     `json:"createdTimeStamp"`
	Description        *string        `json:"description"`
	ID                 *string        `json:"id"`
	Name               *string        `json:"name"`
	ProjectTemplateID  *string        `json:"projectTemplateId"`
	StackID            *string        `json:"stackId"`
	Status             *ProjectStatus `json:"status"`
}
