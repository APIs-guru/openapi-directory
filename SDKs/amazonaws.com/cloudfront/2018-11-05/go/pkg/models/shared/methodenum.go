package shared

type MethodEnum string

const (
	MethodEnumGet     MethodEnum = "GET"
	MethodEnumHead    MethodEnum = "HEAD"
	MethodEnumPost    MethodEnum = "POST"
	MethodEnumPut     MethodEnum = "PUT"
	MethodEnumPatch   MethodEnum = "PATCH"
	MethodEnumOptions MethodEnum = "OPTIONS"
	MethodEnumDelete  MethodEnum = "DELETE"
)
