package shared

type DeliveryStreamStatusEnum string

const (
	DeliveryStreamStatusEnumCreating       DeliveryStreamStatusEnum = "CREATING"
	DeliveryStreamStatusEnumCreatingFailed DeliveryStreamStatusEnum = "CREATING_FAILED"
	DeliveryStreamStatusEnumDeleting       DeliveryStreamStatusEnum = "DELETING"
	DeliveryStreamStatusEnumDeletingFailed DeliveryStreamStatusEnum = "DELETING_FAILED"
	DeliveryStreamStatusEnumActive         DeliveryStreamStatusEnum = "ACTIVE"
)
