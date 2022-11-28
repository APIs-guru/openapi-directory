package shared

type PrincipalTypeEnum string

const (
	PrincipalTypeEnumAll              PrincipalTypeEnum = "All"
	PrincipalTypeEnumService          PrincipalTypeEnum = "Service"
	PrincipalTypeEnumOrganizationUnit PrincipalTypeEnum = "OrganizationUnit"
	PrincipalTypeEnumAccount          PrincipalTypeEnum = "Account"
	PrincipalTypeEnumUser             PrincipalTypeEnum = "User"
	PrincipalTypeEnumRole             PrincipalTypeEnum = "Role"
)
