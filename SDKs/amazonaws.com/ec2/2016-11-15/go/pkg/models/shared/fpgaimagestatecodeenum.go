package shared

type FpgaImageStateCodeEnum string

const (
	FpgaImageStateCodeEnumPending     FpgaImageStateCodeEnum = "pending"
	FpgaImageStateCodeEnumFailed      FpgaImageStateCodeEnum = "failed"
	FpgaImageStateCodeEnumAvailable   FpgaImageStateCodeEnum = "available"
	FpgaImageStateCodeEnumUnavailable FpgaImageStateCodeEnum = "unavailable"
)
