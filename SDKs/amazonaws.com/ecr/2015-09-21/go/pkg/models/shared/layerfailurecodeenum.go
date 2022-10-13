package shared

type LayerFailureCodeEnum string

const (
	LayerFailureCodeEnumInvalidLayerDigest LayerFailureCodeEnum = "InvalidLayerDigest"
	LayerFailureCodeEnumMissingLayerDigest LayerFailureCodeEnum = "MissingLayerDigest"
)
