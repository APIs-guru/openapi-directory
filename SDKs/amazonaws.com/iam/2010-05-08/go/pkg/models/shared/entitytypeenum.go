package shared

type EntityTypeEnum string

const (
	EntityTypeEnumUser               EntityTypeEnum = "User"
	EntityTypeEnumRole               EntityTypeEnum = "Role"
	EntityTypeEnumGroup              EntityTypeEnum = "Group"
	EntityTypeEnumLocalManagedPolicy EntityTypeEnum = "LocalManagedPolicy"
	EntityTypeEnumAwsManagedPolicy   EntityTypeEnum = "AWSManagedPolicy"
)
