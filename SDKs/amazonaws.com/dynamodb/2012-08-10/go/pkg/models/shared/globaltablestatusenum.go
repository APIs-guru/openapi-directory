package shared

type GlobalTableStatusEnum string

const (
	GlobalTableStatusEnumCreating GlobalTableStatusEnum = "CREATING"
	GlobalTableStatusEnumActive   GlobalTableStatusEnum = "ACTIVE"
	GlobalTableStatusEnumDeleting GlobalTableStatusEnum = "DELETING"
	GlobalTableStatusEnumUpdating GlobalTableStatusEnum = "UPDATING"
)
