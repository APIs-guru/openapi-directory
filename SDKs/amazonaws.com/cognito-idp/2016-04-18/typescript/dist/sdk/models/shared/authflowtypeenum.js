export var AuthFlowTypeEnum;
(function (AuthFlowTypeEnum) {
    AuthFlowTypeEnum["UserSrpAuth"] = "USER_SRP_AUTH";
    AuthFlowTypeEnum["RefreshTokenAuth"] = "REFRESH_TOKEN_AUTH";
    AuthFlowTypeEnum["RefreshToken"] = "REFRESH_TOKEN";
    AuthFlowTypeEnum["CustomAuth"] = "CUSTOM_AUTH";
    AuthFlowTypeEnum["AdminNoSrpAuth"] = "ADMIN_NO_SRP_AUTH";
    AuthFlowTypeEnum["UserPasswordAuth"] = "USER_PASSWORD_AUTH";
    AuthFlowTypeEnum["AdminUserPasswordAuth"] = "ADMIN_USER_PASSWORD_AUTH";
})(AuthFlowTypeEnum || (AuthFlowTypeEnum = {}));
