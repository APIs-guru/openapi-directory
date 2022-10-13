package shared

type KmsGrantOperationEnum string

const (
	KmsGrantOperationEnumCreateGrant                         KmsGrantOperationEnum = "CreateGrant"
	KmsGrantOperationEnumDecrypt                             KmsGrantOperationEnum = "Decrypt"
	KmsGrantOperationEnumDescribeKey                         KmsGrantOperationEnum = "DescribeKey"
	KmsGrantOperationEnumEncrypt                             KmsGrantOperationEnum = "Encrypt"
	KmsGrantOperationEnumGenerateDataKey                     KmsGrantOperationEnum = "GenerateDataKey"
	KmsGrantOperationEnumGenerateDataKeyPair                 KmsGrantOperationEnum = "GenerateDataKeyPair"
	KmsGrantOperationEnumGenerateDataKeyPairWithoutPlaintext KmsGrantOperationEnum = "GenerateDataKeyPairWithoutPlaintext"
	KmsGrantOperationEnumGenerateDataKeyWithoutPlaintext     KmsGrantOperationEnum = "GenerateDataKeyWithoutPlaintext"
	KmsGrantOperationEnumGetPublicKey                        KmsGrantOperationEnum = "GetPublicKey"
	KmsGrantOperationEnumReEncryptFrom                       KmsGrantOperationEnum = "ReEncryptFrom"
	KmsGrantOperationEnumReEncryptTo                         KmsGrantOperationEnum = "ReEncryptTo"
	KmsGrantOperationEnumRetireGrant                         KmsGrantOperationEnum = "RetireGrant"
	KmsGrantOperationEnumSign                                KmsGrantOperationEnum = "Sign"
	KmsGrantOperationEnumVerify                              KmsGrantOperationEnum = "Verify"
)
