package shared

type PushSync struct {
	ApplicationArns []string `json:"ApplicationArns"`
	RoleArn         *string  `json:"RoleArn"`
}
