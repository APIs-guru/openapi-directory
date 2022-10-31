package shared

type DomainStatusTypeEnum string

const (
	DomainStatusTypeEnumCreating DomainStatusTypeEnum = "CREATING"
	DomainStatusTypeEnumDeleting DomainStatusTypeEnum = "DELETING"
	DomainStatusTypeEnumUpdating DomainStatusTypeEnum = "UPDATING"
	DomainStatusTypeEnumActive   DomainStatusTypeEnum = "ACTIVE"
	DomainStatusTypeEnumFailed   DomainStatusTypeEnum = "FAILED"
)
