package shared

type HTTPMethodEnum string

const (
	HTTPMethodEnumGet     HTTPMethodEnum = "GET"
	HTTPMethodEnumHead    HTTPMethodEnum = "HEAD"
	HTTPMethodEnumPost    HTTPMethodEnum = "POST"
	HTTPMethodEnumPut     HTTPMethodEnum = "PUT"
	HTTPMethodEnumDelete  HTTPMethodEnum = "DELETE"
	HTTPMethodEnumConnect HTTPMethodEnum = "CONNECT"
	HTTPMethodEnumOptions HTTPMethodEnum = "OPTIONS"
	HTTPMethodEnumTrace   HTTPMethodEnum = "TRACE"
	HTTPMethodEnumPatch   HTTPMethodEnum = "PATCH"
)
