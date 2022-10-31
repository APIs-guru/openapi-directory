package shared

import (
"time")

type Image struct {
    Applications []Application `json:"Applications,omitempty"`
    AppstreamAgentVersion *string `json:"AppstreamAgentVersion,omitempty"`
    Arn *string `json:"Arn,omitempty"`
    BaseImageArn *string `json:"BaseImageArn,omitempty"`
    CreatedTime *time.Time `json:"CreatedTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    ImageBuilderName *string `json:"ImageBuilderName,omitempty"`
    ImageBuilderSupported *bool `json:"ImageBuilderSupported,omitempty"`
    ImageErrors []ResourceError `json:"ImageErrors,omitempty"`
    ImagePermissions *ImagePermissions `json:"ImagePermissions,omitempty"`
    Name string `json:"Name"`
    Platform *PlatformTypeEnum `json:"Platform,omitempty"`
    PublicBaseImageReleasedDate *time.Time `json:"PublicBaseImageReleasedDate,omitempty"`
    State *ImageStateEnum `json:"State,omitempty"`
    StateChangeReason *ImageStateChangeReason `json:"StateChangeReason,omitempty"`
    Visibility *VisibilityTypeEnum `json:"Visibility,omitempty"`
    
}

