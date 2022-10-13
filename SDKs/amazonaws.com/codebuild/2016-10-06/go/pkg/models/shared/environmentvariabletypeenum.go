package shared

type EnvironmentVariableTypeEnum string

const (
	EnvironmentVariableTypeEnumPlaintext      EnvironmentVariableTypeEnum = "PLAINTEXT"
	EnvironmentVariableTypeEnumParameterStore EnvironmentVariableTypeEnum = "PARAMETER_STORE"
	EnvironmentVariableTypeEnumSecretsManager EnvironmentVariableTypeEnum = "SECRETS_MANAGER"
)
