package shared

import (
	"time"
)

// IamInstanceProfileAssociation
// Describes an association between an IAM instance profile and an instance.
type IamInstanceProfileAssociation struct {
	AssociationID      *string
	IamInstanceProfile *IamInstanceProfile
	InstanceID         *string
	State              *IamInstanceProfileAssociationStateEnum
	Timestamp          *time.Time
}
