package shared




type CompatibilityEnum string

const (
    CompatibilityEnumNone CompatibilityEnum = "NONE"
CompatibilityEnumDisabled CompatibilityEnum = "DISABLED"
CompatibilityEnumBackward CompatibilityEnum = "BACKWARD"
CompatibilityEnumBackwardAll CompatibilityEnum = "BACKWARD_ALL"
CompatibilityEnumForward CompatibilityEnum = "FORWARD"
CompatibilityEnumForwardAll CompatibilityEnum = "FORWARD_ALL"
CompatibilityEnumFull CompatibilityEnum = "FULL"
CompatibilityEnumFullAll CompatibilityEnum = "FULL_ALL"
)


