package shared

type ImageStateChangeReasonCodeEnum string

const (
	ImageStateChangeReasonCodeEnumInternalError            ImageStateChangeReasonCodeEnum = "INTERNAL_ERROR"
	ImageStateChangeReasonCodeEnumImageBuilderNotAvailable ImageStateChangeReasonCodeEnum = "IMAGE_BUILDER_NOT_AVAILABLE"
	ImageStateChangeReasonCodeEnumImageCopyFailure         ImageStateChangeReasonCodeEnum = "IMAGE_COPY_FAILURE"
)
