export var ChallengeNameTypeEnum;
(function (ChallengeNameTypeEnum) {
    ChallengeNameTypeEnum["SmsMfa"] = "SMS_MFA";
    ChallengeNameTypeEnum["SoftwareTokenMfa"] = "SOFTWARE_TOKEN_MFA";
    ChallengeNameTypeEnum["SelectMfaType"] = "SELECT_MFA_TYPE";
    ChallengeNameTypeEnum["MfaSetup"] = "MFA_SETUP";
    ChallengeNameTypeEnum["PasswordVerifier"] = "PASSWORD_VERIFIER";
    ChallengeNameTypeEnum["CustomChallenge"] = "CUSTOM_CHALLENGE";
    ChallengeNameTypeEnum["DeviceSrpAuth"] = "DEVICE_SRP_AUTH";
    ChallengeNameTypeEnum["DevicePasswordVerifier"] = "DEVICE_PASSWORD_VERIFIER";
    ChallengeNameTypeEnum["AdminNoSrpAuth"] = "ADMIN_NO_SRP_AUTH";
    ChallengeNameTypeEnum["NewPasswordRequired"] = "NEW_PASSWORD_REQUIRED";
})(ChallengeNameTypeEnum || (ChallengeNameTypeEnum = {}));
