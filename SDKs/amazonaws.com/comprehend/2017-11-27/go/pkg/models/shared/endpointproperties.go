package shared

import (
	"time"
)

type EndpointProperties struct {
	CreationTime          *time.Time          `json:"CreationTime"`
	CurrentInferenceUnits *int64              `json:"CurrentInferenceUnits"`
	DataAccessRoleArn     *string             `json:"DataAccessRoleArn"`
	DesiredInferenceUnits *int64              `json:"DesiredInferenceUnits"`
	EndpointArn           *string             `json:"EndpointArn"`
	LastModifiedTime      *time.Time          `json:"LastModifiedTime"`
	Message               *string             `json:"Message"`
	ModelArn              *string             `json:"ModelArn"`
	Status                *EndpointStatusEnum `json:"Status"`
}
