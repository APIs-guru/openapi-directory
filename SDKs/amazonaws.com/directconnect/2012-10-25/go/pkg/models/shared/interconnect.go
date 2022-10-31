package shared

import (
"time")

type Interconnect struct {
    AwsDevice *string `json:"awsDevice,omitempty"`
    AwsDeviceV2 *string `json:"awsDeviceV2,omitempty"`
    AwsLogicalDeviceID *string `json:"awsLogicalDeviceId,omitempty"`
    Bandwidth *string `json:"bandwidth,omitempty"`
    HasLogicalRedundancy *HasLogicalRedundancyEnum `json:"hasLogicalRedundancy,omitempty"`
    InterconnectID *string `json:"interconnectId,omitempty"`
    InterconnectName *string `json:"interconnectName,omitempty"`
    InterconnectState *InterconnectStateEnum `json:"interconnectState,omitempty"`
    JumboFrameCapable *bool `json:"jumboFrameCapable,omitempty"`
    LagID *string `json:"lagId,omitempty"`
    LoaIssueTime *time.Time `json:"loaIssueTime,omitempty"`
    Location *string `json:"location,omitempty"`
    ProviderName *string `json:"providerName,omitempty"`
    Region *string `json:"region,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

