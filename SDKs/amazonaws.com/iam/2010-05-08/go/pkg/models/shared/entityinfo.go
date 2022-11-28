package shared

// EntityInfo
// <p>Contains details about the specified entity (user or role).</p> <p>This data type is an element of the <a>EntityDetails</a> object.</p>
type EntityInfo struct {
	Arn  string
	ID   string
	Name string
	Path *string
	Type PolicyOwnerEntityTypeEnum
}
