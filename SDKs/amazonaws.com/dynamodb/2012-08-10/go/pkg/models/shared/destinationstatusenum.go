package shared




type DestinationStatusEnum string

const (
    DestinationStatusEnumEnabling DestinationStatusEnum = "ENABLING"
DestinationStatusEnumActive DestinationStatusEnum = "ACTIVE"
DestinationStatusEnumDisabling DestinationStatusEnum = "DISABLING"
DestinationStatusEnumDisabled DestinationStatusEnum = "DISABLED"
DestinationStatusEnumEnableFailed DestinationStatusEnum = "ENABLE_FAILED"
)


