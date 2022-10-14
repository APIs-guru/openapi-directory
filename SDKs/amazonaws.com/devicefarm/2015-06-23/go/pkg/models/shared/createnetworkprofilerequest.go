package shared

type CreateNetworkProfileRequest struct {
	Description           *string                 `json:"description,omitempty"`
	DownlinkBandwidthBits *int64                  `json:"downlinkBandwidthBits,omitempty"`
	DownlinkDelayMs       *int64                  `json:"downlinkDelayMs,omitempty"`
	DownlinkJitterMs      *int64                  `json:"downlinkJitterMs,omitempty"`
	DownlinkLossPercent   *int64                  `json:"downlinkLossPercent,omitempty"`
	Name                  string                  `json:"name"`
	ProjectArn            string                  `json:"projectArn"`
	Type                  *NetworkProfileTypeEnum `json:"type,omitempty"`
	UplinkBandwidthBits   *int64                  `json:"uplinkBandwidthBits,omitempty"`
	UplinkDelayMs         *int64                  `json:"uplinkDelayMs,omitempty"`
	UplinkJitterMs        *int64                  `json:"uplinkJitterMs,omitempty"`
	UplinkLossPercent     *int64                  `json:"uplinkLossPercent,omitempty"`
}
