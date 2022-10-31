package shared

type BgpStatusEnum string

const (
	BgpStatusEnumUp      BgpStatusEnum = "up"
	BgpStatusEnumDown    BgpStatusEnum = "down"
	BgpStatusEnumUnknown BgpStatusEnum = "unknown"
)
