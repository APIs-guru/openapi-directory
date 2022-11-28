import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://cognito-idp.{region}.amazonaws.com", "https://cognito-idp.{region}.amazonaws.com", "http://cognito-idp.{region}.amazonaws.com.cn", "https://cognito-idp.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * addCustomAttributes - Adds additional user attributes to the user pool schema.
    **/
    addCustomAttributes(req: operations.AddCustomAttributesRequest, config?: AxiosRequestConfig): Promise<operations.AddCustomAttributesResponse>;
    /**
     * adminAddUserToGroup - <p>Adds the specified user to the specified group.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminAddUserToGroup(req: operations.AdminAddUserToGroupRequest, config?: AxiosRequestConfig): Promise<operations.AdminAddUserToGroupResponse>;
    /**
     * adminConfirmSignUp - <p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminConfirmSignUp(req: operations.AdminConfirmSignUpRequest, config?: AxiosRequestConfig): Promise<operations.AdminConfirmSignUpResponse>;
    /**
     * adminCreateUser - <p>Creates a new user in the specified user pool.</p> <p>If <code>MessageAction</code> is not set, the default is to send a welcome message via email or phone (SMS).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note> <p>This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> <p>Alternatively, you can call <code>AdminCreateUser</code> with “SUPPRESS” for the <code>MessageAction</code> parameter, and Amazon Cognito will not send any email. </p> <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and change their password.</p> <p> <code>AdminCreateUser</code> requires developer credentials.</p>
    **/
    adminCreateUser(req: operations.AdminCreateUserRequest, config?: AxiosRequestConfig): Promise<operations.AdminCreateUserResponse>;
    /**
     * adminDeleteUser - <p>Deletes a user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminDeleteUser(req: operations.AdminDeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.AdminDeleteUserResponse>;
    /**
     * adminDeleteUserAttributes - <p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminDeleteUserAttributes(req: operations.AdminDeleteUserAttributesRequest, config?: AxiosRequestConfig): Promise<operations.AdminDeleteUserAttributesResponse>;
    /**
     * adminDisableProviderForUser - <p>Disables the user from signing in with the specified external (SAML or social) identity provider. If the user to disable is a Cognito User Pools native username + password user, they are not permitted to use their password to sign-in. If the user to disable is a linked external IdP user, any link between that user and an existing user is removed. The next time the external user (no longer attached to the previously linked <code>DestinationUser</code>) signs in, they must create a new user account. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a>.</p> <p>This action is enabled only for admin access and requires developer credentials.</p> <p>The <code>ProviderName</code> must match the value specified when creating an IdP for the pool. </p> <p>To disable a native username + password user, the <code>ProviderName</code> value must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code>, with the <code>ProviderAttributeValue</code> being the name that is used in the user pool for the user.</p> <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for social identity providers. The <code>ProviderAttributeValue</code> must always be the exact subject that was used when the user was originally linked as a source user.</p> <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign-in, the <code>ProviderAttributeName</code> and <code>ProviderAttributeValue</code> must be the same values that were used for the <code>SourceUser</code> when the identities were originally linked using <code> AdminLinkProviderForUser</code> call. (If the linking was done with <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same applies here). However, if the user has already signed in, the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the subject of the SAML assertion.</p>
    **/
    adminDisableProviderForUser(req: operations.AdminDisableProviderForUserRequest, config?: AxiosRequestConfig): Promise<operations.AdminDisableProviderForUserResponse>;
    /**
     * adminDisableUser - <p>Disables the specified user.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminDisableUser(req: operations.AdminDisableUserRequest, config?: AxiosRequestConfig): Promise<operations.AdminDisableUserResponse>;
    /**
     * adminEnableUser - <p>Enables the specified user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminEnableUser(req: operations.AdminEnableUserRequest, config?: AxiosRequestConfig): Promise<operations.AdminEnableUserResponse>;
    /**
     * adminForgetDevice - <p>Forgets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminForgetDevice(req: operations.AdminForgetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.AdminForgetDeviceResponse>;
    /**
     * adminGetDevice - <p>Gets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminGetDevice(req: operations.AdminGetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.AdminGetDeviceResponse>;
    /**
     * adminGetUser - <p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminGetUser(req: operations.AdminGetUserRequest, config?: AxiosRequestConfig): Promise<operations.AdminGetUserResponse>;
    /**
     * adminInitiateAuth - <p>Initiates the authentication flow, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note> <p>Calling this action requires developer credentials.</p>
    **/
    adminInitiateAuth(req: operations.AdminInitiateAuthRequest, config?: AxiosRequestConfig): Promise<operations.AdminInitiateAuthResponse>;
    /**
     * adminLinkProviderForUser - <p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an identity from an external identity provider (<code>SourceUser</code>) based on a specified attribute name and value from the external identity provider. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in, so that the federated user identity can be used to sign in as the existing user account. </p> <p> For example, if there is an existing user with a username and password, this API links that user to a federated user identity, so that when the federated user identity is used, the user signs in as the existing user account. </p> <note> <p>The maximum number of federated identities linked to a user is 5.</p> </note> <important> <p>Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external identity providers and provider attributes that have been trusted by the application owner.</p> </important> <p>This action is enabled only for admin access and requires developer credentials.</p>
    **/
    adminLinkProviderForUser(req: operations.AdminLinkProviderForUserRequest, config?: AxiosRequestConfig): Promise<operations.AdminLinkProviderForUserResponse>;
    /**
     * adminListDevices - <p>Lists devices, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminListDevices(req: operations.AdminListDevicesRequest, config?: AxiosRequestConfig): Promise<operations.AdminListDevicesResponse>;
    /**
     * adminListGroupsForUser - <p>Lists the groups that the user belongs to.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminListGroupsForUser(req: operations.AdminListGroupsForUserRequest, config?: AxiosRequestConfig): Promise<operations.AdminListGroupsForUserResponse>;
    /**
     * adminListUserAuthEvents - Lists a history of user activity and any risks detected as part of Amazon Cognito advanced security.
    **/
    adminListUserAuthEvents(req: operations.AdminListUserAuthEventsRequest, config?: AxiosRequestConfig): Promise<operations.AdminListUserAuthEventsResponse>;
    /**
     * adminRemoveUserFromGroup - <p>Removes the specified user from the specified group.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminRemoveUserFromGroup(req: operations.AdminRemoveUserFromGroupRequest, config?: AxiosRequestConfig): Promise<operations.AdminRemoveUserFromGroupResponse>;
    /**
     * adminResetUserPassword - <p>Resets the specified user's password in a user pool as an administrator. Works on any user.</p> <p>When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note> <p>Calling this action requires developer credentials.</p>
    **/
    adminResetUserPassword(req: operations.AdminResetUserPasswordRequest, config?: AxiosRequestConfig): Promise<operations.AdminResetUserPasswordResponse>;
    /**
     * adminRespondToAuthChallenge - <p>Responds to an authentication challenge, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note> <p>Calling this action requires developer credentials.</p>
    **/
    adminRespondToAuthChallenge(req: operations.AdminRespondToAuthChallengeRequest, config?: AxiosRequestConfig): Promise<operations.AdminRespondToAuthChallengeResponse>;
    /**
     * adminSetUserMfaPreference - Sets the user's multi-factor authentication (MFA) preference, including which MFA options are enabled and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are enabled. If multiple options are enabled and no preference is set, a challenge to choose an MFA option will be returned during sign in.
    **/
    adminSetUserMfaPreference(req: operations.AdminSetUserMfaPreferenceRequest, config?: AxiosRequestConfig): Promise<operations.AdminSetUserMfaPreferenceResponse>;
    /**
     * adminSetUserPassword - <p>Sets the specified user's password in a user pool as an administrator. Works on any user. </p> <p>The password can be temporary or permanent. If it is temporary, the user status will be placed into the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user does not sign in before it expires, the user will not be able to sign in and their password will need to be reset by an administrator. </p> <p>Once the user has set a new password, or the password is permanent, the user status will be set to <code>Confirmed</code>.</p>
    **/
    adminSetUserPassword(req: operations.AdminSetUserPasswordRequest, config?: AxiosRequestConfig): Promise<operations.AdminSetUserPasswordResponse>;
    /**
     * adminSetUserSettings -  <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.
    **/
    adminSetUserSettings(req: operations.AdminSetUserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AdminSetUserSettingsResponse>;
    /**
     * adminUpdateAuthEventFeedback - Provides feedback for an authentication event as to whether it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.
    **/
    adminUpdateAuthEventFeedback(req: operations.AdminUpdateAuthEventFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.AdminUpdateAuthEventFeedbackResponse>;
    /**
     * adminUpdateDeviceStatus - <p>Updates the device status as an administrator.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminUpdateDeviceStatus(req: operations.AdminUpdateDeviceStatusRequest, config?: AxiosRequestConfig): Promise<operations.AdminUpdateDeviceStatusResponse>;
    /**
     * adminUpdateUserAttributes - <p>Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>In addition to updating user attributes, this API can also be used to mark phone and email as verified.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note> <p>Calling this action requires developer credentials.</p>
    **/
    adminUpdateUserAttributes(req: operations.AdminUpdateUserAttributesRequest, config?: AxiosRequestConfig): Promise<operations.AdminUpdateUserAttributesResponse>;
    /**
     * adminUserGlobalSignOut - <p>Signs out users from all devices, as an administrator. It also invalidates all refresh tokens issued to a user. The user's current access and Id tokens remain valid until their expiry. Access and Id tokens expire one hour after they are issued.</p> <p>Calling this action requires developer credentials.</p>
    **/
    adminUserGlobalSignOut(req: operations.AdminUserGlobalSignOutRequest, config?: AxiosRequestConfig): Promise<operations.AdminUserGlobalSignOutResponse>;
    /**
     * associateSoftwareToken - <p>Returns a unique generated shared secret key code for the user account. The request takes an access token or a session string, but not both.</p> <note> <p>Calling AssociateSoftwareToken immediately disassociates the existing software token from the user account. If the user doesn't subsequently verify the software token, their account is essentially set up to authenticate without MFA. If MFA config is set to Optional at the user pool level, the user can then login without MFA. However, if MFA is set to Required for the user pool, the user will be asked to setup a new software token MFA during sign in.</p> </note>
    **/
    associateSoftwareToken(req: operations.AssociateSoftwareTokenRequest, config?: AxiosRequestConfig): Promise<operations.AssociateSoftwareTokenResponse>;
    /**
     * changePassword - Changes the password for a specified user in a user pool.
    **/
    changePassword(req: operations.ChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangePasswordResponse>;
    /**
     * confirmDevice - Confirms tracking of the device. This API call is the call that begins device tracking.
    **/
    confirmDevice(req: operations.ConfirmDeviceRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmDeviceResponse>;
    /**
     * confirmForgotPassword - Allows a user to enter a confirmation code to reset a forgotten password.
    **/
    confirmForgotPassword(req: operations.ConfirmForgotPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmForgotPasswordResponse>;
    /**
     * confirmSignUp - Confirms registration of a user and handles the existing alias from a previous user.
    **/
    confirmSignUp(req: operations.ConfirmSignUpRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmSignUpResponse>;
    /**
     * createGroup - <p>Creates a new group in the specified user pool.</p> <p>Calling this action requires developer credentials.</p>
    **/
    createGroup(req: operations.CreateGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * createIdentityProvider - Creates an identity provider for a user pool.
    **/
    createIdentityProvider(req: operations.CreateIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.CreateIdentityProviderResponse>;
    /**
     * createResourceServer - Creates a new OAuth2.0 resource server and defines custom scopes in it.
    **/
    createResourceServer(req: operations.CreateResourceServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateResourceServerResponse>;
    /**
     * createUserImportJob - Creates the user import job.
    **/
    createUserImportJob(req: operations.CreateUserImportJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserImportJobResponse>;
    /**
     * createUserPool - <p>Creates a new Amazon Cognito user pool and sets the password policy for the pool.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note>
    **/
    createUserPool(req: operations.CreateUserPoolRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserPoolResponse>;
    /**
     * createUserPoolClient - <p>Creates the user pool client.</p> <p>When you create a new user pool client, token revocation is automatically enabled. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
    **/
    createUserPoolClient(req: operations.CreateUserPoolClientRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserPoolClientResponse>;
    /**
     * createUserPoolDomain - Creates a new domain for a user pool.
    **/
    createUserPoolDomain(req: operations.CreateUserPoolDomainRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserPoolDomainResponse>;
    /**
     * deleteGroup - <p>Deletes a group.</p> <p>Calling this action requires developer credentials.</p>
    **/
    deleteGroup(req: operations.DeleteGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupResponse>;
    /**
     * deleteIdentityProvider - Deletes an identity provider for a user pool.
    **/
    deleteIdentityProvider(req: operations.DeleteIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIdentityProviderResponse>;
    /**
     * deleteResourceServer - Deletes a resource server.
    **/
    deleteResourceServer(req: operations.DeleteResourceServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourceServerResponse>;
    /**
     * deleteUser - Allows a user to delete himself or herself.
    **/
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * deleteUserAttributes - Deletes the attributes for a user.
    **/
    deleteUserAttributes(req: operations.DeleteUserAttributesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserAttributesResponse>;
    /**
     * deleteUserPool - Deletes the specified Amazon Cognito user pool.
    **/
    deleteUserPool(req: operations.DeleteUserPoolRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserPoolResponse>;
    /**
     * deleteUserPoolClient - Allows the developer to delete the user pool client.
    **/
    deleteUserPoolClient(req: operations.DeleteUserPoolClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserPoolClientResponse>;
    /**
     * deleteUserPoolDomain - Deletes a domain for a user pool.
    **/
    deleteUserPoolDomain(req: operations.DeleteUserPoolDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserPoolDomainResponse>;
    /**
     * describeIdentityProvider - Gets information about a specific identity provider.
    **/
    describeIdentityProvider(req: operations.DescribeIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.DescribeIdentityProviderResponse>;
    /**
     * describeResourceServer - Describes a resource server.
    **/
    describeResourceServer(req: operations.DescribeResourceServerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeResourceServerResponse>;
    /**
     * describeRiskConfiguration - Describes the risk configuration.
    **/
    describeRiskConfiguration(req: operations.DescribeRiskConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRiskConfigurationResponse>;
    /**
     * describeUserImportJob - Describes the user import job.
    **/
    describeUserImportJob(req: operations.DescribeUserImportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserImportJobResponse>;
    /**
     * describeUserPool - Returns the configuration information and metadata of the specified user pool.
    **/
    describeUserPool(req: operations.DescribeUserPoolRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserPoolResponse>;
    /**
     * describeUserPoolClient - Client method for returning the configuration information and metadata of the specified user pool app client.
    **/
    describeUserPoolClient(req: operations.DescribeUserPoolClientRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserPoolClientResponse>;
    /**
     * describeUserPoolDomain - Gets information about a domain.
    **/
    describeUserPoolDomain(req: operations.DescribeUserPoolDomainRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserPoolDomainResponse>;
    /**
     * forgetDevice - Forgets the specified device.
    **/
    forgetDevice(req: operations.ForgetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.ForgetDeviceResponse>;
    /**
     * forgotPassword - <p>Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the <code>Username</code> parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. If neither a verified phone number nor a verified email exists, an <code>InvalidParameterException</code> is thrown. To use the confirmation code for resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note>
    **/
    forgotPassword(req: operations.ForgotPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ForgotPasswordResponse>;
    /**
     * getCsvHeader - Gets the header information for the .csv file to be used as input for the user import job.
    **/
    getCsvHeader(req: operations.GetCsvHeaderRequest, config?: AxiosRequestConfig): Promise<operations.GetCsvHeaderResponse>;
    /**
     * getDevice - Gets the device.
    **/
    getDevice(req: operations.GetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
    /**
     * getGroup - <p>Gets a group.</p> <p>Calling this action requires developer credentials.</p>
    **/
    getGroup(req: operations.GetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupResponse>;
    /**
     * getIdentityProviderByIdentifier - Gets the specified identity provider.
    **/
    getIdentityProviderByIdentifier(req: operations.GetIdentityProviderByIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.GetIdentityProviderByIdentifierResponse>;
    /**
     * getSigningCertificate - This method takes a user pool ID, and returns the signing certificate.
    **/
    getSigningCertificate(req: operations.GetSigningCertificateRequest, config?: AxiosRequestConfig): Promise<operations.GetSigningCertificateResponse>;
    /**
     * getUiCustomization - Gets the UI Customization information for a particular app client's app UI, if there is something set. If nothing is set for the particular client, but there is an existing pool level customization (app <code>clientId</code> will be <code>ALL</code>), then that is returned. If nothing is present, then an empty shape is returned.
    **/
    getUiCustomization(req: operations.GetUiCustomizationRequest, config?: AxiosRequestConfig): Promise<operations.GetUiCustomizationResponse>;
    /**
     * getUser - Gets the user attributes and metadata for a user.
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUserAttributeVerificationCode - <p>Gets the user attribute verification code for the specified attribute name.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note>
    **/
    getUserAttributeVerificationCode(req: operations.GetUserAttributeVerificationCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAttributeVerificationCodeResponse>;
    /**
     * getUserPoolMfaConfig - Gets the user pool multi-factor authentication (MFA) configuration.
    **/
    getUserPoolMfaConfig(req: operations.GetUserPoolMfaConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPoolMfaConfigResponse>;
    /**
     * globalSignOut - Signs out users from all devices. It also invalidates all refresh tokens issued to a user. The user's current access and Id tokens remain valid until their expiry. Access and Id tokens expire one hour after they are issued.
    **/
    globalSignOut(req: operations.GlobalSignOutRequest, config?: AxiosRequestConfig): Promise<operations.GlobalSignOutResponse>;
    /**
     * initiateAuth - <p>Initiates the authentication flow.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note>
    **/
    initiateAuth(req: operations.InitiateAuthRequest, config?: AxiosRequestConfig): Promise<operations.InitiateAuthResponse>;
    /**
     * listDevices - Lists the devices.
    **/
    listDevices(req: operations.ListDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ListDevicesResponse>;
    /**
     * listGroups - <p>Lists the groups associated with a user pool.</p> <p>Calling this action requires developer credentials.</p>
    **/
    listGroups(req: operations.ListGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupsResponse>;
    /**
     * listIdentityProviders - Lists information about all identity providers for a user pool.
    **/
    listIdentityProviders(req: operations.ListIdentityProvidersRequest, config?: AxiosRequestConfig): Promise<operations.ListIdentityProvidersResponse>;
    /**
     * listResourceServers - Lists the resource servers for a user pool.
    **/
    listResourceServers(req: operations.ListResourceServersRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceServersResponse>;
    /**
     * listTagsForResource - <p>Lists the tags that are assigned to an Amazon Cognito user pool.</p> <p>A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listUserImportJobs - Lists the user import jobs.
    **/
    listUserImportJobs(req: operations.ListUserImportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListUserImportJobsResponse>;
    /**
     * listUserPoolClients - Lists the clients that have been created for the specified user pool.
    **/
    listUserPoolClients(req: operations.ListUserPoolClientsRequest, config?: AxiosRequestConfig): Promise<operations.ListUserPoolClientsResponse>;
    /**
     * listUserPools - Lists the user pools associated with an account.
    **/
    listUserPools(req: operations.ListUserPoolsRequest, config?: AxiosRequestConfig): Promise<operations.ListUserPoolsResponse>;
    /**
     * listUsers - Lists the users in the Amazon Cognito user pool.
    **/
    listUsers(req: operations.ListUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
    /**
     * listUsersInGroup - <p>Lists the users in the specified group.</p> <p>Calling this action requires developer credentials.</p>
    **/
    listUsersInGroup(req: operations.ListUsersInGroupRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersInGroupResponse>;
    /**
     * resendConfirmationCode - <p>Resends the confirmation (for confirmation of registration) to a specific user in the user pool.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note>
    **/
    resendConfirmationCode(req: operations.ResendConfirmationCodeRequest, config?: AxiosRequestConfig): Promise<operations.ResendConfirmationCodeResponse>;
    /**
     * respondToAuthChallenge - <p>Responds to the authentication challenge.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note>
    **/
    respondToAuthChallenge(req: operations.RespondToAuthChallengeRequest, config?: AxiosRequestConfig): Promise<operations.RespondToAuthChallengeResponse>;
    /**
     * revokeToken - Revokes all of the access tokens generated by the specified refresh token. After the token is revoked, you can not use the revoked token to access Cognito authenticated APIs.
    **/
    revokeToken(req: operations.RevokeTokenRequest, config?: AxiosRequestConfig): Promise<operations.RevokeTokenResponse>;
    /**
     * setRiskConfiguration - <p>Configures actions on detected risks. To delete the risk configuration for <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four configuration types.</p> <p>To enable Amazon Cognito advanced security features, update the user pool to include the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>
    **/
    setRiskConfiguration(req: operations.SetRiskConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.SetRiskConfigurationResponse>;
    /**
     * setUiCustomization - <p>Sets the UI customization information for a user pool's built-in app UI.</p> <p>You can specify app UI customization settings for a single client (with a specific <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to <code>ALL</code>). If you specify <code>ALL</code>, the default configuration will be used for every client that has no UI customization set previously. If you specify UI customization settings for a particular client, it will no longer fall back to the <code>ALL</code> configuration. </p> <note> <p>To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.</p> </note>
    **/
    setUiCustomization(req: operations.SetUiCustomizationRequest, config?: AxiosRequestConfig): Promise<operations.SetUiCustomizationResponse>;
    /**
     * setUserMfaPreference - Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are enabled and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are enabled. If multiple options are enabled and no preference is set, a challenge to choose an MFA option will be returned during sign in. If an MFA type is enabled for a user, the user will be prompted for MFA during all sign in attempts, unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign in attempts, disable MFA for users and turn on Adaptive Authentication for the user pool.
    **/
    setUserMfaPreference(req: operations.SetUserMfaPreferenceRequest, config?: AxiosRequestConfig): Promise<operations.SetUserMfaPreferenceResponse>;
    /**
     * setUserPoolMfaConfig - <p>Set the user pool multi-factor authentication (MFA) configuration.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note>
    **/
    setUserPoolMfaConfig(req: operations.SetUserPoolMfaConfigRequest, config?: AxiosRequestConfig): Promise<operations.SetUserPoolMfaConfigResponse>;
    /**
     * setUserSettings -  <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure TOTP software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html">SetUserMFAPreference</a> instead.
    **/
    setUserSettings(req: operations.SetUserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.SetUserSettingsResponse>;
    /**
     * signUp - <p>Registers the user in the specified user pool and creates a user name, password, and user attributes.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note>
    **/
    signUp(req: operations.SignUpRequest, config?: AxiosRequestConfig): Promise<operations.SignUpResponse>;
    /**
     * startUserImportJob - Starts the user import.
    **/
    startUserImportJob(req: operations.StartUserImportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartUserImportJobResponse>;
    /**
     * stopUserImportJob - Stops the user import job.
    **/
    stopUserImportJob(req: operations.StopUserImportJobRequest, config?: AxiosRequestConfig): Promise<operations.StopUserImportJobResponse>;
    /**
     * tagResource - <p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both user pools. The value of this key might be <code>Test</code> for one user pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an IAM policy, you can constrain permissions for user pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.</p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateAuthEventFeedback - Provides the feedback for an authentication event whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.
    **/
    updateAuthEventFeedback(req: operations.UpdateAuthEventFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAuthEventFeedbackResponse>;
    /**
     * updateDeviceStatus - Updates the device status.
    **/
    updateDeviceStatus(req: operations.UpdateDeviceStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceStatusResponse>;
    /**
     * updateGroup - <p>Updates the specified group with the specified attributes.</p> <p>Calling this action requires developer credentials.</p>
    **/
    updateGroup(req: operations.UpdateGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupResponse>;
    /**
     * updateIdentityProvider - Updates identity provider information for a user pool.
    **/
    updateIdentityProvider(req: operations.UpdateIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIdentityProviderResponse>;
    /**
     * updateResourceServer - <p>Updates the name and scopes of resource server. All other fields are read-only.</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important>
    **/
    updateResourceServer(req: operations.UpdateResourceServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceServerResponse>;
    /**
     * updateUserAttributes - <p>Allows a user to update a specific attribute (one at a time).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note>
    **/
    updateUserAttributes(req: operations.UpdateUserAttributesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserAttributesResponse>;
    /**
     * updateUserPool - <p>Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">DescribeUserPool</a>. If you don't provide a value for an attribute, it will be set to the default value.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, U.S. telecom carriers require that you register an origination phone number before you can send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Cognito will use the the registered number automatically. Otherwise, Cognito users that must receive SMS messages might be unable to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you’ll have limitations, such as sending messages to only verified phone numbers. After testing in the sandbox environment, you can move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon Cognito Developer Guide</i>. </p> </note>
    **/
    updateUserPool(req: operations.UpdateUserPoolRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserPoolResponse>;
    /**
     * updateUserPoolClient - <p>Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html">DescribeUserPoolClient</a>.</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important> <p>You can also use this operation to enable token revocation for user pool clients. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
    **/
    updateUserPoolClient(req: operations.UpdateUserPoolClientRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserPoolClientResponse>;
    /**
     * updateUserPoolDomain - <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.</p> <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You cannot use it to change the domain for a user pool.</p> <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain.</p> <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically.</p> <p>However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito.</p> <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the Region.</p> <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
    **/
    updateUserPoolDomain(req: operations.UpdateUserPoolDomainRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserPoolDomainResponse>;
    /**
     * verifySoftwareToken - Use this API to register a user's entered TOTP code and mark the user's software token MFA status as "verified" if successful. The request takes an access token or a session string, but not both.
    **/
    verifySoftwareToken(req: operations.VerifySoftwareTokenRequest, config?: AxiosRequestConfig): Promise<operations.VerifySoftwareTokenResponse>;
    /**
     * verifyUserAttribute - Verifies the specified user attributes in the user pool.
    **/
    verifyUserAttribute(req: operations.VerifyUserAttributeRequest, config?: AxiosRequestConfig): Promise<operations.VerifyUserAttributeResponse>;
}
export {};
