package shared




type ChallengeNameTypeEnum string

const (
    ChallengeNameTypeEnumSmsMfa ChallengeNameTypeEnum = "SMS_MFA"
ChallengeNameTypeEnumSoftwareTokenMfa ChallengeNameTypeEnum = "SOFTWARE_TOKEN_MFA"
ChallengeNameTypeEnumSelectMfaType ChallengeNameTypeEnum = "SELECT_MFA_TYPE"
ChallengeNameTypeEnumMfaSetup ChallengeNameTypeEnum = "MFA_SETUP"
ChallengeNameTypeEnumPasswordVerifier ChallengeNameTypeEnum = "PASSWORD_VERIFIER"
ChallengeNameTypeEnumCustomChallenge ChallengeNameTypeEnum = "CUSTOM_CHALLENGE"
ChallengeNameTypeEnumDeviceSrpAuth ChallengeNameTypeEnum = "DEVICE_SRP_AUTH"
ChallengeNameTypeEnumDevicePasswordVerifier ChallengeNameTypeEnum = "DEVICE_PASSWORD_VERIFIER"
ChallengeNameTypeEnumAdminNoSrpAuth ChallengeNameTypeEnum = "ADMIN_NO_SRP_AUTH"
ChallengeNameTypeEnumNewPasswordRequired ChallengeNameTypeEnum = "NEW_PASSWORD_REQUIRED"
)


