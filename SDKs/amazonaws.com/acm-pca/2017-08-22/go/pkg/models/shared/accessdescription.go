package shared

type AccessDescription struct {
	AccessLocation GeneralName  `json:"AccessLocation"`
	AccessMethod   AccessMethod `json:"AccessMethod"`
}
