export var AuthenticationTypeEnum;
(function (AuthenticationTypeEnum) {
    AuthenticationTypeEnum["ApiKey"] = "API_KEY";
    AuthenticationTypeEnum["AwsIam"] = "AWS_IAM";
    AuthenticationTypeEnum["AmazonCognitoUserPools"] = "AMAZON_COGNITO_USER_POOLS";
    AuthenticationTypeEnum["OpenidConnect"] = "OPENID_CONNECT";
    AuthenticationTypeEnum["AwsLambda"] = "AWS_LAMBDA";
})(AuthenticationTypeEnum || (AuthenticationTypeEnum = {}));
