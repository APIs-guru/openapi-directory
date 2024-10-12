# coding: utf-8

"""
    Account and Transaction API Specification - UK

    ## Functionality at a glance    The NBG \"UK OPB - Account and Transaction v3.1.5\" API follows the [UK Open Banking Specification      v3.1.5](https://openbankinguk.github.io/read-write-api-site3/v3.1.5/profiles/account-and-transaction-api-profile.html)    This Account and Transaction API Specification describes the flows and payloads for retrieving a list of accounts and their transactions.    The API endpoints described here allow a AISP to:      * Create the Consent with the appropriate permissions in order to be able to access the API Endpoints    * Retrieve the list of accounts    * Retrieve an account's details    * Retrieve an account's balances    * Retrieve an account's transactions    * Retrieve an account's beneficiaries    * Retrieve an account's standing orders    * Retrieve an account's party    * Retrieve an account's scheduled payments    * Retrieve an account's statements        ## Quick Getting Started      1. **Login/Register** to the NBG Technology HUB    2. Go to **\"APPS\"**    3. Select your Organization and go to step 4. If you want to create a new Organization click **\\\"CREATE AN ORGANIZATION\\\"** and follow the steps below:   1. Enter the title of your Organization   2. Enter a short description of your Organization (optional)   3. Click **\"SUBMIT\"**    4. Select the Organization of choice and click **\"ADD AN APPLICATION\"**      1. Fill in the forms (title and short description)     2. Check **\\\"Authorization Code\\\" and \\\"Client Credentials\\\"**      3. Enter the **OAuth Redirect and Post Logout URIs** (these are the URIs that we will redirect the user upon logging in and logging out respectively)            You can use the following redirect URL to easily test the API through the portal: *https://developer.nbg.gr/oauth2/redoc-callback*     4. Click **\"SUBMIT\"**     5. Store the APPs **\"Client ID\"** and **\"Client Secret\"**  5. Go to **\"API PRODUCTS\"** and select the **ACCOUNT INFORMATION - UK OPEN BANKING API**    6. Click **\\\"START USING THIS API\\\"**, choose your app and click  **\"SUBSCRIBE\"**    7. Get an Access Token using the Access Token Flow and the API scopes provided in the Authentication and Authorization (OAuth2) section below    8. Create a Sandbox    9. Play with the API       ### Sandbox Flow    The Sandbox Flow matches the Production Flow. The difference lies into the Data used. Instead of live  data, the Sandbox flow uses mocked data.      ### Production Flow      The Production Flow is described in the [UK Open Banking v3.1.5  Specification](https://openbankinguk.github.io/read-write-api-site3/v3.1.5/profiles/account-and-transaction-api-profile.html)    More details about the implementation specifics followed, please visit section **UK OPB Implementation  Specifics**      ## Authentication and Authorization (OAuth2)    This API version uses the OAuth2 protocol for authentication and authorization, which means that a  Bearer (access token) should be acquired. An access token can be retrieved using the client_id and  client_secret of the APP that you created and subscribed in this API, and your own credentials  (username, password) that you use to sign in the NBG Technology HUB. The scopes are defined below:    **Authorization Endpoint:**        https://my.nbg.gr/identity/connect/authorize      **Token Endpoint:**        https://my.nbg.gr/identity/connect/token    ### Authorization Code ###    **Sandbox Scopes:**        sandbox-uk-account-info-api-v1 offline_access      **Production Scopes:**        accounts offline_access    ### Client Credentials ###    **Sandbox Scopes:**        sandbox-uk-account-info-api-v1      **Production Scopes:**        accounts      See more [here](https://developer.nbg.gr/oauth-document)    ## QWAC Certificates    TPPs are required to present a QWAC certificate during API consumption. The API checks that this certificate has been provided and is valid. In sandbox mode the certificate validations are optional. To validate your certificate in sandbox implementation, please send us your QWAC certificate at developer@nbg.gr and set the HTTP Header **\\\"x-sandbox-qwac-certificate-check\\\"** with the value **\\\"true\\\"** in your requests.     ## SMS Challenge (One Time Password)    In order to successfully authorize an Accounts Access you will need to provide the SMS OTP (One Time Password) in the corresponding Accounts Consent UI Screen.    By default the SMS OTP will be sent to the mobile number declared upon singing up in the NBG Technology HUB.         ## Create your Sandbox    Create a new Sandbox application by invoking the POST /sandbox. This call will generate a new Sandbox  with a unique sandbox-id.      __Important!__ Before proceeding save the sandbox id you just created.      When you create a sandbox, users and sandbox specific data are generated as sample data.      ## Start Testing    Once you have your sandbox-id, you can start invoking the rest of the operations by providing the  mandatory http header **sandbox-id**  and the http headers described below.      ## Important notes      **Request headers**      The following HTTP header parameters are required for every call:      1. Authorization. The Auth2 Token    2. sandbox-id. Your Sandbox ID      **Consent**      In order to be able to effectively start using the Endpoints the appropriate Consent needs to be  created and set to the 'Authorised' status.       In order to create the Consent you need to at least set the required **permissions** and the **Risk**  sections.       Optionally you may set the       1. ExpirationDateTime. When the Consent expires       2. TransactionFromDateTime. Start Date to retrieve the transactions       3. TransactionToDateTime. End Date to retrieve the transactions     **Not Implemented Endpoints**    The following endpoints are not implemented in the API    1. GET /balances  2. GET /transactions  3. GET /beneficiaries  4. GET /accounts/\\{AccountId\\}/direct-debits  5. GET /direct-debits  6. GET /standing-orders  7. GET /accounts/\\{AccountId\\}/product  8. GET /products  9. GET /accounts/\\{AccountId\\}/offers  10. GET /offers  11. GET /scheduled-payments  12. GET /statements      ## Error Codes    The error codes and their description can be found  [here](https://openbankinguk.github.io/read-write-api-site3/v3.1.5/profiles/read-write-data-api-profile.html#error-response-structure)      # UK OPB Implementation Specifics     Below you may find more specific information &amp; limitations regarding the implementation followed in the Production API.      ## Token Endpoint Client Authentication    At this point the supported __Client Authentication__ method is \"__Client Secret Basic__\" - usage of \"Client ID\" &amp; \"Client Secret\".      ## Consent Authorization    For a PSU to Authorize a Consent, they need to be redirected to the appropriate Consent UI.    For this redirection to take place the TPP needs to follow the Authorization Endpoint by amending the generated \"Consent ID\", like this: https://my.nbg.gr/identity/connect/authorize?consent_id={{consent_id}}&amp;client_id={{client_id}}&amp;scope={{scope}}&amp;redirect_uri={{redirect_uri}}&amp;response_type=code    Once the PSU is redirected to the Consent Authorization Screen, they need to enter their IBank (Production) or Developer Portal (Sandbox) Credentials and either Authorize or Reject the Consent.    At this point the Consent is binded with the PSU.      ## Debtor Account  Currently, only the \"UK.OBIE.IBAN\" scheme is supported.        # Feedback and Questions    We would love to hear your feedback and answer your questions. Send us at  [developer@nbg.gr](developer@nbg.gr)      Check out our [Sandbox Postman  Collection](https://github.com/NBG-Developer-Portal/Account-Information-UK-Open-Banking)!      ________________________________________    Created by [**NBG**](https://www.nbg.gr/).   # Entities    Below, the main entities are documented.  &lt;a name=OBExternalPermissions1Code&gt;&lt;/a&gt;  ## OBExternalPermissions1Code  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;ReadAccountsBasic&lt;/li&gt;&lt;li&gt;ReadAccountsDetail&lt;/li&gt;&lt;li&gt;ReadBalances&lt;/li&gt;&lt;li&gt;ReadBeneficiariesBasic&lt;/li&gt;&lt;li&gt;ReadBeneficiariesDetail&lt;/li&gt;&lt;li&gt;ReadDirectDebits&lt;/li&gt;&lt;li&gt;ReadOffers&lt;/li&gt;&lt;li&gt;ReadPAN&lt;/li&gt;&lt;li&gt;ReadParty&lt;/li&gt;&lt;li&gt;ReadPartyPSU&lt;/li&gt;&lt;li&gt;ReadProducts&lt;/li&gt;&lt;li&gt;ReadScheduledPaymentsBasic&lt;/li&gt;&lt;li&gt;ReadScheduledPaymentsDetail&lt;/li&gt;&lt;li&gt;ReadStandingOrdersBasic&lt;/li&gt;&lt;li&gt;ReadStandingOrdersDetail&lt;/li&gt;&lt;li&gt;ReadStatementsBasic&lt;/li&gt;&lt;li&gt;ReadStatementsDetail&lt;/li&gt;&lt;li&gt;ReadTransactionsBasic&lt;/li&gt;&lt;li&gt;ReadTransactionsCredits&lt;/li&gt;&lt;li&gt;ReadTransactionsDebits&lt;/li&gt;&lt;li&gt;ReadTransactionsDetail&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=OBReadData1&gt;&lt;/a&gt;  ## OBReadData1    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Permissions| Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.| array[[OBExternalPermissions1Code](#OBExternalPermissions1Code)]| | ExpirationDateTime| Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string| | TransactionFromDateTime| Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string| | TransactionToDateTime| Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|   &lt;a name=OBRisk2&gt;&lt;/a&gt;  ## OBRisk2  The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.   ### Attributes   | Name| Description| Values| | -----| -----| -----|   &lt;a name=OBReadConsent1&gt;&lt;/a&gt;  ## OBReadConsent1    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadData1](#OBReadData1)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Permissions [array[[OBExternalPermissions1Code](#OBExternalPermissions1Code)]]&lt;/li&gt; &lt;li&gt;ExpirationDateTime [string]&lt;/li&gt; &lt;li&gt;TransactionFromDateTime [string]&lt;/li&gt; &lt;li&gt;TransactionToDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Risk | Entity | &lt;details&gt;&lt;summary&gt;[OBRisk2](#OBRisk2)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |    &lt;a name=ErrorCode&gt;&lt;/a&gt;  ## ErrorCode  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| This is Data Type gives a low level textual error code to help categorise an error response. The applicable HTTP response code is also given.| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;UK.OBIE.Field.Expected&lt;/li&gt;&lt;li&gt;UK.OBIE.Field.Invalid&lt;/li&gt;&lt;li&gt;UK.OBIE.Field.InvalidDate&lt;/li&gt;&lt;li&gt;UK.OBIE.Field.Missing&lt;/li&gt;&lt;li&gt;UK.OBIE.Field.Unexpected&lt;/li&gt;&lt;li&gt;UK.OBIE.Header.Invalid&lt;/li&gt;&lt;li&gt;UK.OBIE.Header.Missing&lt;/li&gt;&lt;li&gt;UK.OBIE.Resource.ConsentMismatch&lt;/li&gt;&lt;li&gt;UK.OBIE.Resource.InvalidConsentStatus&lt;/li&gt;&lt;li&gt;UK.OBIE.Resource.InvalidFormat&lt;/li&gt;&lt;li&gt;UK.OBIE.Resource.NotFound&lt;/li&gt;&lt;li&gt;UK.OBIE.Rules.AfterCutOffDateTime&lt;/li&gt;&lt;li&gt;UK.OBIE.Rules.DuplicateReference&lt;/li&gt;&lt;li&gt;UK.OBIE.Signature.Invalid&lt;/li&gt;&lt;li&gt;UK.OBIE.Signature.InvalidClaim&lt;/li&gt;&lt;li&gt;UK.OBIE.Signature.MissingClaim&lt;/li&gt;&lt;li&gt;UK.OBIE.Signature.Malformed&lt;/li&gt;&lt;li&gt;UK.OBIE.Signature.Missing&lt;/li&gt;&lt;li&gt;UK.OBIE.Signature.Unexpected&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.AccountIdentifier&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.AccountSecondaryIdentifier&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.Currency&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.EventType&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.Frequency&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.LocalInstrument&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.Scheme&lt;/li&gt;&lt;li&gt;UK.OBIE.Reauthenticate&lt;/li&gt;&lt;li&gt;UK.OBIE.Rules.ResourceAlreadyExists&lt;/li&gt;&lt;li&gt;UK.OBIE.UnexpectedError&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=OBError1&gt;&lt;/a&gt;  ## OBError1    ### Attributes   | Name| Description| Values| | -----| -----| -----| | ErrorCode | Entity | &lt;details&gt;&lt;summary&gt;[ErrorCode](#ErrorCode)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | Message| A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'OBIE doesn't standardise this field| string| | Path| Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency| string|   &lt;a name=OBErrorResponse1&gt;&lt;/a&gt;  ## OBErrorResponse1  An array of detail error codes, and messages, and URLs to documentation to help remediation.   ### Attributes   | Name| Description| Values| | -----| -----| -----| | Code| High level textual error code, to help categorize the errors.| string| | Id| A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.| string| | Message| Brief Error message, e.g., 'There is something wrong with the request parameters provided'| string| | Errors| Gets or Sets Errors| array[[OBError1](#OBError1)]|   &lt;a name=OBExternalRequestStatus1Code&gt;&lt;/a&gt;  ## OBExternalRequestStatus1Code  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| Specifies the status of consent resource in code form.| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;Authorised&lt;/li&gt;&lt;li&gt;AwaitingAuthorisation&lt;/li&gt;&lt;li&gt;Rejected&lt;/li&gt;&lt;li&gt;Revoked&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=OBReadDataConsentResponse1&gt;&lt;/a&gt;  ## OBReadDataConsentResponse1    ### Attributes   | Name| Description| Values| | -----| -----| -----| | ConsentId| Unique identification as assigned to identify the account access consent resource.| string| | CreationDateTime| Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string| | Status | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalRequestStatus1Code](#OBExternalRequestStatus1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | StatusUpdateDateTime| Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string| | Permissions| Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.| array[[OBExternalPermissions1Code](#OBExternalPermissions1Code)]| | ExpirationDateTime| Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string| | TransactionFromDateTime| Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string| | TransactionToDateTime| Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|   &lt;a name=Links&gt;&lt;/a&gt;  ## Links  Links relevant to the payload   ### Attributes   | Name| Description| Values| | -----| -----| -----| | Self| -| string| | First| -| string| | Prev| -| string| | Next| -| string| | Last| -| string|   &lt;a name=Meta&gt;&lt;/a&gt;  ## Meta  Meta Data relevant to the payload   ### Attributes   | Name| Description| Values| | -----| -----| -----| | TotalPages| -| integer| | FirstAvailableDateTime| All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string| | LastAvailableDateTime| All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|   &lt;a name=OBReadConsentResponse1&gt;&lt;/a&gt;  ## OBReadConsentResponse1    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataConsentResponse1](#OBReadDataConsentResponse1)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;ConsentId [string]&lt;/li&gt; &lt;li&gt;CreationDateTime [string]&lt;/li&gt; &lt;li&gt;&lt;details&gt;&lt;summary&gt;Status [[OBExternalRequestStatus1Code](#OBExternalRequestStatus1Code)]&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt;&lt;/li&gt;&lt;li&gt;StatusUpdateDateTime [string]&lt;/li&gt; &lt;li&gt;Permissions [array[[OBExternalPermissions1Code](#OBExternalPermissions1Code)]]&lt;/li&gt; &lt;li&gt;ExpirationDateTime [string]&lt;/li&gt; &lt;li&gt;TransactionFromDateTime [string]&lt;/li&gt; &lt;li&gt;TransactionToDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Risk | Entity | &lt;details&gt;&lt;summary&gt;[OBRisk2](#OBRisk2)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBExternalAccountType1Code&gt;&lt;/a&gt;  ## OBExternalAccountType1Code  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| -| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;Business&lt;/li&gt;&lt;li&gt;Personal&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=OBExternalAccountSubType1Code&gt;&lt;/a&gt;  ## OBExternalAccountSubType1Code  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| -| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;ChargeCard&lt;/li&gt;&lt;li&gt;CreditCard&lt;/li&gt;&lt;li&gt;CurrentAccount&lt;/li&gt;&lt;li&gt;EMoney&lt;/li&gt;&lt;li&gt;Loan&lt;/li&gt;&lt;li&gt;Mortgage&lt;/li&gt;&lt;li&gt;PrePaidCard&lt;/li&gt;&lt;li&gt;Savings&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=OBCashAccount5&gt;&lt;/a&gt;  ## OBCashAccount5    ### Attributes   | Name| Description| Values| | -----| -----| -----| | SchemeName| Name of the identification scheme, in a coded form as published in an external list.| string| | Identification| Identification assigned by an institution to identify an account. This identification is known by the account owner.| string| | Name| The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels. Note, the account name is not the product name or the nickname of the account.| string| | SecondaryIdentification| This is secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number(in addition to a sort code and account number combination).| string|   &lt;a name=OBBranchAndFinancialInstitutionIdentification5&gt;&lt;/a&gt;  ## OBBranchAndFinancialInstitutionIdentification5    ### Attributes   | Name| Description| Values| | -----| -----| -----| | SchemeName| Name of the identification scheme, in a coded form as published in an external list.| string| | Identification| Unique and unambiguous identification of the servicing institution.| string|   &lt;a name=OBAccount6&gt;&lt;/a&gt;  ## OBAccount6  Unambiguous identification of the account to which credit and debit entries are made.   ### Attributes   | Name| Description| Values| | -----| -----| -----| | AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string| | Currency| Identification of the currency in which the account is held.  Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account.| string| | AccountType | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalAccountType1Code](#OBExternalAccountType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | AccountSubType | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalAccountSubType1Code](#OBExternalAccountSubType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | Description| Specifies the description of the account type.| string| | Nickname| The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.| string| | OpeningDate| Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string| | Account| Provides the details to identify an account.| array[[OBCashAccount5](#OBCashAccount5)]| | Servicer | Entity | &lt;details&gt;&lt;summary&gt;[OBBranchAndFinancialInstitutionIdentification5](#OBBranchAndFinancialInstitutionIdentification5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;SchemeName [string]&lt;/li&gt; &lt;li&gt;Identification [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBReadDataAccount5&gt;&lt;/a&gt;  ## OBReadDataAccount5    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Account| Unambiguous identification of the account to which credit and debit entries are made.| array[[OBAccount6](#OBAccount6)]|   &lt;a name=OBReadAccount5&gt;&lt;/a&gt;  ## OBReadAccount5    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataAccount5](#OBReadDataAccount5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Account [array[[OBAccount6](#OBAccount6)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBCreditDebitCode&gt;&lt;/a&gt;  ## OBCreditDebitCode  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| -| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;Credit&lt;/li&gt;&lt;li&gt;Debit&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=OBBalanceType1Code&gt;&lt;/a&gt;  ## OBBalanceType1Code  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| -| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;ClosingAvailable&lt;/li&gt;&lt;li&gt;ClosingBooked&lt;/li&gt;&lt;li&gt;ClosingCleared&lt;/li&gt;&lt;li&gt;Expected&lt;/li&gt;&lt;li&gt;ForwardAvailable&lt;/li&gt;&lt;li&gt;Information&lt;/li&gt;&lt;li&gt;InterimAvailable&lt;/li&gt;&lt;li&gt;InterimBooked&lt;/li&gt;&lt;li&gt;InterimCleared&lt;/li&gt;&lt;li&gt;OpeningAvailable&lt;/li&gt;&lt;li&gt;OpeningBooked&lt;/li&gt;&lt;li&gt;OpeningCleared&lt;/li&gt;&lt;li&gt;PreviouslyClosedBooked&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=OBActiveOrHistoricCurrencyAndAmount&gt;&lt;/a&gt;  ## OBActiveOrHistoricCurrencyAndAmount    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Amount| A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.| string| | Currency| A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 \"Codes for the representation of currencies and funds\".| string|   &lt;a name=OBExternalLimitType1Code&gt;&lt;/a&gt;  ## OBExternalLimitType1Code  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| -| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;Available&lt;/li&gt;&lt;li&gt;Credit&lt;/li&gt;&lt;li&gt;Emergency&lt;/li&gt;&lt;li&gt;Pre-Agreed&lt;/li&gt;&lt;li&gt;Temporary&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=OBCreditLine1&gt;&lt;/a&gt;  ## OBCreditLine1    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Included| Indicates whether or not the credit line is included in the balance of the account. Usage: If not present, credit line is not included in the balance amount of the account.| boolean| | Type | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalLimitType1Code](#OBExternalLimitType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | Amount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBCashBalance1&gt;&lt;/a&gt;  ## OBCashBalance1  Set of elements used to define the balance details.   ### Attributes   | Name| Description| Values| | -----| -----| -----| | AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string| | CreditDebitIndicator | Entity | &lt;details&gt;&lt;summary&gt;[OBCreditDebitCode](#OBCreditDebitCode)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | Type | Entity | &lt;details&gt;&lt;summary&gt;[OBBalanceType1Code](#OBBalanceType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | DateTime| Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string| | Amount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | CreditLine| Set of elements used to provide details on the credit line.| array[[OBCreditLine1](#OBCreditLine1)]|   &lt;a name=OBReadDataBalance1&gt;&lt;/a&gt;  ## OBReadDataBalance1    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Balance| Set of elements used to define the balance details.| array[[OBCashBalance1](#OBCashBalance1)]|   &lt;a name=OBReadBalance1&gt;&lt;/a&gt;  ## OBReadBalance1    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataBalance1](#OBReadDataBalance1)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Balance [array[[OBCashBalance1](#OBCashBalance1)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBBeneficiaryType1Code&gt;&lt;/a&gt;  ## OBBeneficiaryType1Code  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| Specifies the Beneficiary Type.| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;Trusted&lt;/li&gt;&lt;li&gt;Ordinary&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=OBBeneficiary5&gt;&lt;/a&gt;  ## OBBeneficiary5    ### Attributes   | Name| Description| Values| | -----| -----| -----| | AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string| | BeneficiaryType | Entity | &lt;details&gt;&lt;summary&gt;[OBBeneficiaryType1Code](#OBBeneficiaryType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | CreditorAccount | Entity | &lt;details&gt;&lt;summary&gt;[OBCashAccount5](#OBCashAccount5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;SchemeName [string]&lt;/li&gt; &lt;li&gt;Identification [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;li&gt;SecondaryIdentification [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBReadDataBeneficiary5&gt;&lt;/a&gt;  ## OBReadDataBeneficiary5    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Beneficiary| -| array[[OBBeneficiary5](#OBBeneficiary5)]|   &lt;a name=OBReadBeneficiary5&gt;&lt;/a&gt;  ## OBReadBeneficiary5    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataBeneficiary5](#OBReadDataBeneficiary5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Beneficiary [array[[OBBeneficiary5](#OBBeneficiary5)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBParty2&gt;&lt;/a&gt;  ## OBParty2    ### Attributes   | Name| Description| Values| | -----| -----| -----| | PartyId| A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.| string| | Name| Name by which a party is known and which is usually used to identify that party.| string|   &lt;a name=OBReadDataParty2&gt;&lt;/a&gt;  ## OBReadDataParty2    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Party | Entity | &lt;details&gt;&lt;summary&gt;[OBParty2](#OBParty2)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;PartyId [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBReadParty2&gt;&lt;/a&gt;  ## OBReadParty2    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataParty2](#OBReadDataParty2)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;&lt;details&gt;&lt;summary&gt;Party [[OBParty2](#OBParty2)]&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;PartyId [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/details&gt; |  | Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBReadDataParty3&gt;&lt;/a&gt;  ## OBReadDataParty3    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Party| -| array[[OBParty2](#OBParty2)]|   &lt;a name=OBReadParty3&gt;&lt;/a&gt;  ## OBReadParty3    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataParty3](#OBReadDataParty3)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Party [array[[OBParty2](#OBParty2)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=SandboxRequest&gt;&lt;/a&gt;  ## SandboxRequest  Request to create a new sandbox   ### Attributes   | Name| Description| Values| | -----| -----| -----| | sandboxId| Sandbox Id| string|   &lt;a name=ErrorResponse&gt;&lt;/a&gt;  ## ErrorResponse    ### Attributes   | Name| Description| Values| | -----| -----| -----| | errorMessage| -| string|   &lt;a name=SandboxRetryCacheEntry&gt;&lt;/a&gt;  ## SandboxRetryCacheEntry  Keeps the number of calls without x-fapi-customer-ip-address header present   ### Attributes   | Name| Description| Values| | -----| -----| -----| | cacheKey| Cache key| string| | count| Number of retries ( up to 4 )| integer| | expirationTimestamp| Expiration timestamp of the entry| string|   &lt;a name=SandboxBankAccountInfo&gt;&lt;/a&gt;  ## SandboxBankAccountInfo  General account information   ### Attributes   | Name| Description| Values| | -----| -----| -----| | currency| Currency (EUR, USD ...)| string| | iban| Account's IBAN| string| | accountType| Account's type (Business, Personal)| string| | accountSubType| Account's sub-type (ChargeCard, CreditCard, CurrentAccount ...)| string| | description| Account's description| string| | alias| Account's alias| string| | openingDate| Account's opening date| string| | availableBalance| Account's available balance| number| | ledgerBalance| Account's ledger balance| number| | overdraftLimit| Account's overdraft limit| number|   &lt;a name=SandboxParty&gt;&lt;/a&gt;  ## SandboxParty  Connected party information   ### Attributes   | Name| Description| Values| | -----| -----| -----| | id| Party id| string| | name| Name| string|   &lt;a name=SandboxBeneficiary&gt;&lt;/a&gt;  ## SandboxBeneficiary  Beneficiary information   ### Attributes   | Name| Description| Values| | -----| -----| -----| | name| Beneficiary name| string|   &lt;a name=SandboxStandingOrder&gt;&lt;/a&gt;  ## SandboxStandingOrder  Standing order information   ### Attributes   | Name| Description| Values| | -----| -----| -----| | description| Standing order short description| string| | frequency| Standing order frequency| string| | firstPaymentDate| Standing order first collection date| string| | nextPaymentDate| Standing order next collection date| string| | finalPaymentDate| Standing order final collection date| string| | lastPaymentDate| Standing order last executed payment date| string| | status| Standing order status (Active, Inactive)| string| | amount| Standing order amount| number|   &lt;a name=SandboxScheduledPayment&gt;&lt;/a&gt;  ## SandboxScheduledPayment  Scheduled payment information   ### Attributes   | Name| Description| Values| | -----| -----| -----| | description| Scheduled payment's short description| string| | executionDate| Scheduled payment's execution date| string| | amount| Amount| number| | senderReference| Debtor / Sender reference| string|   &lt;a name=SandboxStatement&gt;&lt;/a&gt;  ## SandboxStatement  Statement information   ### Attributes   | Name| Description| Values| | -----| -----| -----| | number| Statement number| string| | year| Statement year| integer| | month| Statement month| integer|   &lt;a name=SandboxTransaction&gt;&lt;/a&gt;  ## SandboxTransaction  Transaction information   ### Attributes   | Name| Description| Values| | -----| -----| -----| | reference| Transaction reference| string| | amount| Amount| number| | currency| Currency (EUR, USD ...)| string| | creditDebit| Credit / Debit indicator| string| | valueDateTime| Valeur| string| | bookingDateTime| Booking date time| string| | description| Description| string| | accountingBalance| Balance| number| | relatedAccount| Related account| string| | relatedName| Related account| string| | transactionCode| Transaction code| string|   &lt;a name=SandboxBankAccount&gt;&lt;/a&gt;  ## SandboxBankAccount  Sandbox bank account   ### Attributes   | Name| Description| Values| | -----| -----| -----| | info | Entity | &lt;details&gt;&lt;summary&gt;[SandboxBankAccountInfo](#SandboxBankAccountInfo)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;currency [string]&lt;/li&gt; &lt;li&gt;iban [string]&lt;/li&gt; &lt;li&gt;accountType [string]&lt;/li&gt; &lt;li&gt;accountSubType [string]&lt;/li&gt; &lt;li&gt;description [string]&lt;/li&gt; &lt;li&gt;alias [string]&lt;/li&gt; &lt;li&gt;openingDate [string]&lt;/li&gt; &lt;li&gt;availableBalance [number]&lt;/li&gt; &lt;li&gt;ledgerBalance [number]&lt;/li&gt; &lt;li&gt;overdraftLimit [number]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | party | Entity | &lt;details&gt;&lt;summary&gt;[SandboxParty](#SandboxParty)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;id [string]&lt;/li&gt; &lt;li&gt;name [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | beneficiaries| List of account's beneficiaries| array[[SandboxBeneficiary](#SandboxBeneficiary)]| | standingOrders| List of account's standing orders| array[[SandboxStandingOrder](#SandboxStandingOrder)]| | scheduledPayments| List of account's scheduled payments| array[[SandboxScheduledPayment](#SandboxScheduledPayment)]| | statements| List of account's statements| array[[SandboxStatement](#SandboxStatement)]| | transactions| List of account's transactions| array[[SandboxTransaction](#SandboxTransaction)]|   &lt;a name=SandboxCardInfo&gt;&lt;/a&gt;  ## SandboxCardInfo  Sandbox card information   ### Attributes   | Name| Description| Values| | -----| -----| -----| | number| Card number| string| | description| Description| string| | holderName| Holder name| string| | expiration| Expiration date (05/2022)| string| | type| Type| string| | subType| Sub type| string| | availableBalance| Available balance| number| | ledgerBalance| Ledger balance| number| | creditLimit| Credit limit ( applicable to credit cards )| number|   &lt;a name=SandboxCard&gt;&lt;/a&gt;  ## SandboxCard  Sandbox card   ### Attributes   | Name| Description| Values| | -----| -----| -----| | info | Entity | &lt;details&gt;&lt;summary&gt;[SandboxCardInfo](#SandboxCardInfo)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;number [string]&lt;/li&gt; &lt;li&gt;description [string]&lt;/li&gt; &lt;li&gt;holderName [string]&lt;/li&gt; &lt;li&gt;expiration [string]&lt;/li&gt; &lt;li&gt;type [string]&lt;/li&gt; &lt;li&gt;subType [string]&lt;/li&gt; &lt;li&gt;availableBalance [number]&lt;/li&gt; &lt;li&gt;ledgerBalance [number]&lt;/li&gt; &lt;li&gt;creditLimit [number]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | party | Entity | &lt;details&gt;&lt;summary&gt;[SandboxParty](#SandboxParty)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;id [string]&lt;/li&gt; &lt;li&gt;name [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | statements| Card statements| array[[SandboxStatement](#SandboxStatement)]| | transactions| Card transactions| array[[SandboxTransaction](#SandboxTransaction)]|   &lt;a name=SandboxUser&gt;&lt;/a&gt;  ## SandboxUser  User data   ### Attributes   | Name| Description| Values| | -----| -----| -----| | userId| Connected user id| string| | retryCacheEntries| Retry cache entries| array[[SandboxRetryCacheEntry](#SandboxRetryCacheEntry)]| | accounts| List of accounts| array[[SandboxBankAccount](#SandboxBankAccount)]| | cards| List of cards| array[[SandboxCard](#SandboxCard)]|   &lt;a name=Sandbox&gt;&lt;/a&gt;  ## Sandbox  Sandbox model   ### Attributes   | Name| Description| Values| | -----| -----| -----| | sandboxId| Sandbox id| string| | users| List of users| array[[SandboxUser](#SandboxUser)]|   &lt;a name=OBExternalScheduleType1Code&gt;&lt;/a&gt;  ## OBExternalScheduleType1Code  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| -| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;Arrival&lt;/li&gt;&lt;li&gt;Execution&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=OBScheduledPayment3&gt;&lt;/a&gt;  ## OBScheduledPayment3    ### Attributes   | Name| Description| Values| | -----| -----| -----| | AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string| | ScheduledPaymentId| A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.| string| | ScheduledPaymentDateTime| The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string| | ScheduledType | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalScheduleType1Code](#OBExternalScheduleType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | Reference| Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.| string| | DebtorReference| A reference value provided by the PSU to the PISP while setting up the scheduled payment.| string| | InstructedAmount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | CreditorAccount | Entity | &lt;details&gt;&lt;summary&gt;[OBCashAccount5](#OBCashAccount5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;SchemeName [string]&lt;/li&gt; &lt;li&gt;Identification [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;li&gt;SecondaryIdentification [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBReadDataScheduledPayment3&gt;&lt;/a&gt;  ## OBReadDataScheduledPayment3    ### Attributes   | Name| Description| Values| | -----| -----| -----| | ScheduledPayment| -| array[[OBScheduledPayment3](#OBScheduledPayment3)]|   &lt;a name=OBReadScheduledPayment3&gt;&lt;/a&gt;  ## OBReadScheduledPayment3    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataScheduledPayment3](#OBReadDataScheduledPayment3)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;ScheduledPayment [array[[OBScheduledPayment3](#OBScheduledPayment3)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBExternalStandingOrderStatus1Code&gt;&lt;/a&gt;  ## OBExternalStandingOrderStatus1Code  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| -| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;Active&lt;/li&gt;&lt;li&gt;Inactive&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=OBStandingOrder5&gt;&lt;/a&gt;  ## OBStandingOrder5    ### Attributes   | Name| Description| Values| | -----| -----| -----| | AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string| | StandingOrderId| A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.| string| | Frequency| Individual Definitions: IntrvlMnthDay - An interval specified in months(between 01, 02, 03, 04, 06, 12, 24), specifying the day within the month(01 to 31) Full Regular Expression: ^(IntrvlMnthDay:(0[1,2,3,4,6]|12|24):(0[1-9]|[12] [0-9]|3[01]))$| string| | Reference| Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.| string| | FirstPaymentDateTime| The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string| | NextPaymentDateTime| The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string| | LastPaymentDateTime| The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string| | FinalPaymentDateTime| The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string| | StandingOrderStatusCode | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalStandingOrderStatus1Code](#OBExternalStandingOrderStatus1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | FirstPaymentAmount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | NextPaymentAmount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | LastPaymentAmount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | FinalPaymentAmount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | CreditorAccount | Entity | &lt;details&gt;&lt;summary&gt;[OBCashAccount5](#OBCashAccount5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;SchemeName [string]&lt;/li&gt; &lt;li&gt;Identification [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;li&gt;SecondaryIdentification [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBReadDataStandingOrder5&gt;&lt;/a&gt;  ## OBReadDataStandingOrder5    ### Attributes   | Name| Description| Values| | -----| -----| -----| | StandingOrder| -| array[[OBStandingOrder5](#OBStandingOrder5)]|   &lt;a name=OBReadStandingOrder6&gt;&lt;/a&gt;  ## OBReadStandingOrder6    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataStandingOrder5](#OBReadDataStandingOrder5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;StandingOrder [array[[OBStandingOrder5](#OBStandingOrder5)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBExternalStatementType1Code&gt;&lt;/a&gt;  ## OBExternalStatementType1Code  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| -| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;AccountClosure&lt;/li&gt;&lt;li&gt;AccountOpening&lt;/li&gt;&lt;li&gt;Annual&lt;/li&gt;&lt;li&gt;Interim&lt;/li&gt;&lt;li&gt;RegularPeriodic&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=OBStatement2&gt;&lt;/a&gt;  ## OBStatement2  Provides further details on a statement resource.   ### Attributes   | Name| Description| Values| | -----| -----| -----| | AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string| | StatementId| Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.| string| | StatementReference| Unique reference for the statement. This reference may be optionally populated if available.| string| | Type | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalStatementType1Code](#OBExternalStatementType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | StartDateTime| Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string| | EndDateTime| Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string| | CreationDateTime| Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|   &lt;a name=OBReadDataStatement2&gt;&lt;/a&gt;  ## OBReadDataStatement2    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Statement| Provides further details on a statement resource.| array[[OBStatement2](#OBStatement2)]|   &lt;a name=OBReadStatement2&gt;&lt;/a&gt;  ## OBReadStatement2    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataStatement2](#OBReadDataStatement2)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Statement [array[[OBStatement2](#OBStatement2)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBEntryStatus1Code&gt;&lt;/a&gt;  ## OBEntryStatus1Code  ### Attributes   | Type| Description| Example| Values| | -----| -----| -----| -----| | enum| -| &lt;ul style=\"padding-left: 0\"&gt;&lt;li&gt;Booked&lt;/li&gt;&lt;li&gt;Pending&lt;/li&gt;&lt;/ul&gt;|   &lt;a name=ProprietaryBankTransactionCodeStructure1&gt;&lt;/a&gt;  ## ProprietaryBankTransactionCodeStructure1  Set of elements to fully identify a proprietary bank transaction code.   ### Attributes   | Name| Description| Values| | -----| -----| -----| | Code| Proprietary bank transaction code to identify the underlying transaction.| string| | Issuer| Identification of the issuer of the proprietary bank transaction code.| string|   &lt;a name=OBTransactionCashBalance&gt;&lt;/a&gt;  ## OBTransactionCashBalance  Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.   ### Attributes   | Name| Description| Values| | -----| -----| -----| | CreditDebitIndicator | Entity | &lt;details&gt;&lt;summary&gt;[OBCreditDebitCode](#OBCreditDebitCode)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | Type | Entity | &lt;details&gt;&lt;summary&gt;[OBBalanceType1Code](#OBBalanceType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | Amount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBCashAccount6&gt;&lt;/a&gt;  ## OBCashAccount6  Unambiguous identification of the account of the creditor, in the case of a debit transaction.   ### Attributes   | Name| Description| Values| | -----| -----| -----| | SchemeName| Name of the identification scheme, in a coded form as published in an external list.| string| | Identification| Identification assigned by an institution to identify an account. This identification is known by the account owner.| string| | Name| The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels. Note, the account name is not the product name or the nickname of the account.| string|   &lt;a name=OBTransaction6&gt;&lt;/a&gt;  ## OBTransaction6  Provides further details on an entry in the report.   ### Attributes   | Name| Description| Values| | -----| -----| -----| | AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string| | TransactionReference| Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.| string| | CreditDebitIndicator | Entity | &lt;details&gt;&lt;summary&gt;[OBCreditDebitCode](#OBCreditDebitCode)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | Status | Entity | &lt;details&gt;&lt;summary&gt;[OBEntryStatus1Code](#OBEntryStatus1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; |  | BookingDateTime| Date and time when a transaction entry is posted to an account on the account servicer's books. Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string| | ValueDateTime| Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry. Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date. For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used.In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string| | TransactionInformation| Further details of the transaction. This is the transaction narrative, which is unstructured text.| string| | Amount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | ProprietaryBankTransactionCode | Entity | &lt;details&gt;&lt;summary&gt;[ProprietaryBankTransactionCodeStructure1](#ProprietaryBankTransactionCodeStructure1)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Code [string]&lt;/li&gt; &lt;li&gt;Issuer [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Balance | Entity | &lt;details&gt;&lt;summary&gt;[OBTransactionCashBalance](#OBTransactionCashBalance)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;&lt;details&gt;&lt;summary&gt;CreditDebitIndicator [[OBCreditDebitCode](#OBCreditDebitCode)]&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt;&lt;/li&gt;&lt;li&gt;&lt;details&gt;&lt;summary&gt;Type [[OBBalanceType1Code](#OBBalanceType1Code)]&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt;&lt;/li&gt;&lt;li&gt;&lt;details&gt;&lt;summary&gt;Amount [[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)]&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/details&gt; |  | CreditorAccount | Entity | &lt;details&gt;&lt;summary&gt;[OBCashAccount6](#OBCashAccount6)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;SchemeName [string]&lt;/li&gt; &lt;li&gt;Identification [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | DebtorAccount | Entity | &lt;details&gt;&lt;summary&gt;[OBCashAccount6](#OBCashAccount6)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;SchemeName [string]&lt;/li&gt; &lt;li&gt;Identification [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |    &lt;a name=OBReadDataTransaction6&gt;&lt;/a&gt;  ## OBReadDataTransaction6    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Transaction| Provides further details on an entry in the report.| array[[OBTransaction6](#OBTransaction6)]|   &lt;a name=OBReadTransaction6&gt;&lt;/a&gt;  ## OBReadTransaction6    ### Attributes   | Name| Description| Values| | -----| -----| -----| | Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataTransaction6](#OBReadDataTransaction6)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Transaction [array[[OBTransaction6](#OBTransaction6)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |  | Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; |   # Authentication  &lt;!-- ReDoc-Inject: &lt;security-definitions&gt; --&gt;

    The version of the OpenAPI document: v3.1.5
    Contact: developer@nbg.gr
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import datetime
from dateutil.parser import parse
from enum import Enum
import decimal
import json
import mimetypes
import os
import re
import tempfile

from urllib.parse import quote
from typing import Tuple, Optional, List, Dict, Union
from pydantic import SecretStr

from openapi_client.configuration import Configuration
from openapi_client.api_response import ApiResponse, T as ApiResponseT
import openapi_client.models
from openapi_client import rest
from openapi_client.exceptions import (
    ApiValueError,
    ApiException,
    BadRequestException,
    UnauthorizedException,
    ForbiddenException,
    NotFoundException,
    ServiceException
)

RequestSerialized = Tuple[str, str, Dict[str, str], Optional[str], List[str]]

class ApiClient:
    """Generic API client for OpenAPI client library builds.

    OpenAPI generic API client. This client handles the client-
    server communication, and is invariant across implementations. Specifics of
    the methods and models for each application are generated from the OpenAPI
    templates.

    :param configuration: .Configuration object for this client
    :param header_name: a header to pass when making calls to the API.
    :param header_value: a header value to pass when making calls to
        the API.
    :param cookie: a cookie to include in the header when making calls
        to the API
    """

    PRIMITIVE_TYPES = (float, bool, bytes, str, int)
    NATIVE_TYPES_MAPPING = {
        'int': int,
        'long': int, # TODO remove as only py3 is supported?
        'float': float,
        'str': str,
        'bool': bool,
        'date': datetime.date,
        'datetime': datetime.datetime,
        'decimal': decimal.Decimal,
        'object': object,
    }
    _pool = None

    def __init__(
        self,
        configuration=None,
        header_name=None,
        header_value=None,
        cookie=None
    ) -> None:
        # use default configuration if none is provided
        if configuration is None:
            configuration = Configuration.get_default()
        self.configuration = configuration

        self.rest_client = rest.RESTClientObject(configuration)
        self.default_headers = {}
        if header_name is not None:
            self.default_headers[header_name] = header_value
        self.cookie = cookie
        # Set default User-Agent.
        self.user_agent = 'OpenAPI-Generator/1.0.0/python'
        self.client_side_validation = configuration.client_side_validation

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        pass

    @property
    def user_agent(self):
        """User agent for this API client"""
        return self.default_headers['User-Agent']

    @user_agent.setter
    def user_agent(self, value):
        self.default_headers['User-Agent'] = value

    def set_default_header(self, header_name, header_value):
        self.default_headers[header_name] = header_value


    _default = None

    @classmethod
    def get_default(cls):
        """Return new instance of ApiClient.

        This method returns newly created, based on default constructor,
        object of ApiClient class or returns a copy of default
        ApiClient.

        :return: The ApiClient object.
        """
        if cls._default is None:
            cls._default = ApiClient()
        return cls._default

    @classmethod
    def set_default(cls, default):
        """Set default instance of ApiClient.

        It stores default ApiClient.

        :param default: object of ApiClient.
        """
        cls._default = default

    def param_serialize(
        self,
        method,
        resource_path,
        path_params=None,
        query_params=None,
        header_params=None,
        body=None,
        post_params=None,
        files=None, auth_settings=None,
        collection_formats=None,
        _host=None,
        _request_auth=None
    ) -> RequestSerialized:

        """Builds the HTTP request params needed by the request.
        :param method: Method to call.
        :param resource_path: Path to method endpoint.
        :param path_params: Path parameters in the url.
        :param query_params: Query parameters in the url.
        :param header_params: Header parameters to be
            placed in the request header.
        :param body: Request body.
        :param post_params dict: Request post form parameters,
            for `application/x-www-form-urlencoded`, `multipart/form-data`.
        :param auth_settings list: Auth Settings names for the request.
        :param files dict: key -> filename, value -> filepath,
            for `multipart/form-data`.
        :param collection_formats: dict of collection formats for path, query,
            header, and post parameters.
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the authentication
                              in the spec for a single request.
        :return: tuple of form (path, http_method, query_params, header_params,
            body, post_params, files)
        """

        config = self.configuration

        # header parameters
        header_params = header_params or {}
        header_params.update(self.default_headers)
        if self.cookie:
            header_params['Cookie'] = self.cookie
        if header_params:
            header_params = self.sanitize_for_serialization(header_params)
            header_params = dict(
                self.parameters_to_tuples(header_params,collection_formats)
            )

        # path parameters
        if path_params:
            path_params = self.sanitize_for_serialization(path_params)
            path_params = self.parameters_to_tuples(
                path_params,
                collection_formats
            )
            for k, v in path_params:
                # specified safe chars, encode everything
                resource_path = resource_path.replace(
                    '{%s}' % k,
                    quote(str(v), safe=config.safe_chars_for_path_param)
                )

        # post parameters
        if post_params or files:
            post_params = post_params if post_params else []
            post_params = self.sanitize_for_serialization(post_params)
            post_params = self.parameters_to_tuples(
                post_params,
                collection_formats
            )
            if files:
                post_params.extend(self.files_parameters(files))

        # auth setting
        self.update_params_for_auth(
            header_params,
            query_params,
            auth_settings,
            resource_path,
            method,
            body,
            request_auth=_request_auth
        )

        # body
        if body:
            body = self.sanitize_for_serialization(body)

        # request url
        if _host is None or self.configuration.ignore_operation_servers:
            url = self.configuration.host + resource_path
        else:
            # use server/host defined in path or operation instead
            url = _host + resource_path

        # query parameters
        if query_params:
            query_params = self.sanitize_for_serialization(query_params)
            url_query = self.parameters_to_url_query(
                query_params,
                collection_formats
            )
            url += "?" + url_query

        return method, url, header_params, body, post_params


    def call_api(
        self,
        method,
        url,
        header_params=None,
        body=None,
        post_params=None,
        _request_timeout=None
    ) -> rest.RESTResponse:
        """Makes the HTTP request (synchronous)
        :param method: Method to call.
        :param url: Path to method endpoint.
        :param header_params: Header parameters to be
            placed in the request header.
        :param body: Request body.
        :param post_params dict: Request post form parameters,
            for `application/x-www-form-urlencoded`, `multipart/form-data`.
        :param _request_timeout: timeout setting for this request.
        :return: RESTResponse
        """

        try:
            # perform request and return response
            response_data = self.rest_client.request(
                method, url,
                headers=header_params,
                body=body, post_params=post_params,
                _request_timeout=_request_timeout
            )

        except ApiException as e:
            raise e

        return response_data

    def response_deserialize(
        self,
        response_data: rest.RESTResponse,
        response_types_map: Optional[Dict[str, ApiResponseT]]=None
    ) -> ApiResponse[ApiResponseT]:
        """Deserializes response into an object.
        :param response_data: RESTResponse object to be deserialized.
        :param response_types_map: dict of response types.
        :return: ApiResponse
        """

        msg = "RESTResponse.read() must be called before passing it to response_deserialize()"
        assert response_data.data is not None, msg

        response_type = response_types_map.get(str(response_data.status), None)
        if not response_type and isinstance(response_data.status, int) and 100 <= response_data.status <= 599:
            # if not found, look for '1XX', '2XX', etc.
            response_type = response_types_map.get(str(response_data.status)[0] + "XX", None)

        # deserialize response data
        response_text = None
        return_data = None
        try:
            if response_type == "bytearray":
                return_data = response_data.data
            elif response_type == "file":
                return_data = self.__deserialize_file(response_data)
            elif response_type is not None:
                match = None
                content_type = response_data.getheader('content-type')
                if content_type is not None:
                    match = re.search(r"charset=([a-zA-Z\-\d]+)[\s;]?", content_type)
                encoding = match.group(1) if match else "utf-8"
                response_text = response_data.data.decode(encoding)
                return_data = self.deserialize(response_text, response_type, content_type)
        finally:
            if not 200 <= response_data.status <= 299:
                raise ApiException.from_response(
                    http_resp=response_data,
                    body=response_text,
                    data=return_data,
                )

        return ApiResponse(
            status_code = response_data.status,
            data = return_data,
            headers = response_data.getheaders(),
            raw_data = response_data.data
        )

    def sanitize_for_serialization(self, obj):
        """Builds a JSON POST object.

        If obj is None, return None.
        If obj is SecretStr, return obj.get_secret_value()
        If obj is str, int, long, float, bool, return directly.
        If obj is datetime.datetime, datetime.date
            convert to string in iso8601 format.
        If obj is decimal.Decimal return string representation.
        If obj is list, sanitize each element in the list.
        If obj is dict, return the dict.
        If obj is OpenAPI model, return the properties dict.

        :param obj: The data to serialize.
        :return: The serialized form of data.
        """
        if obj is None:
            return None
        elif isinstance(obj, Enum):
            return obj.value
        elif isinstance(obj, SecretStr):
            return obj.get_secret_value()
        elif isinstance(obj, self.PRIMITIVE_TYPES):
            return obj
        elif isinstance(obj, list):
            return [
                self.sanitize_for_serialization(sub_obj) for sub_obj in obj
            ]
        elif isinstance(obj, tuple):
            return tuple(
                self.sanitize_for_serialization(sub_obj) for sub_obj in obj
            )
        elif isinstance(obj, (datetime.datetime, datetime.date)):
            return obj.isoformat()
        elif isinstance(obj, decimal.Decimal):
            return str(obj)

        elif isinstance(obj, dict):
            obj_dict = obj
        else:
            # Convert model obj to dict except
            # attributes `openapi_types`, `attribute_map`
            # and attributes which value is not None.
            # Convert attribute name to json key in
            # model definition for request.
            if hasattr(obj, 'to_dict') and callable(getattr(obj, 'to_dict')):
                obj_dict = obj.to_dict()
            else:
                obj_dict = obj.__dict__

        return {
            key: self.sanitize_for_serialization(val)
            for key, val in obj_dict.items()
        }

    def deserialize(self, response_text: str, response_type: str, content_type: Optional[str]):
        """Deserializes response into an object.

        :param response: RESTResponse object to be deserialized.
        :param response_type: class literal for
            deserialized object, or string of class name.
        :param content_type: content type of response.

        :return: deserialized object.
        """

        # fetch data from response object
        if content_type is None:
            try:
                data = json.loads(response_text)
            except ValueError:
                data = response_text
        elif re.match(r'^application/(json|[\w!#$&.+-^_]+\+json)\s*(;|$)', content_type, re.IGNORECASE):
            if response_text == "":
                data = ""
            else:
                data = json.loads(response_text)
        elif re.match(r'^text\/[a-z.+-]+\s*(;|$)', content_type, re.IGNORECASE):
            data = response_text
        else:
            raise ApiException(
                status=0,
                reason="Unsupported content type: {0}".format(content_type)
            )

        return self.__deserialize(data, response_type)

    def __deserialize(self, data, klass):
        """Deserializes dict, list, str into an object.

        :param data: dict, list or str.
        :param klass: class literal, or string of class name.

        :return: object.
        """
        if data is None:
            return None

        if isinstance(klass, str):
            if klass.startswith('List['):
                m = re.match(r'List\[(.*)]', klass)
                assert m is not None, "Malformed List type definition"
                sub_kls = m.group(1)
                return [self.__deserialize(sub_data, sub_kls)
                        for sub_data in data]

            if klass.startswith('Dict['):
                m = re.match(r'Dict\[([^,]*), (.*)]', klass)
                assert m is not None, "Malformed Dict type definition"
                sub_kls = m.group(2)
                return {k: self.__deserialize(v, sub_kls)
                        for k, v in data.items()}

            # convert str to class
            if klass in self.NATIVE_TYPES_MAPPING:
                klass = self.NATIVE_TYPES_MAPPING[klass]
            else:
                klass = getattr(openapi_client.models, klass)

        if klass in self.PRIMITIVE_TYPES:
            return self.__deserialize_primitive(data, klass)
        elif klass == object:
            return self.__deserialize_object(data)
        elif klass == datetime.date:
            return self.__deserialize_date(data)
        elif klass == datetime.datetime:
            return self.__deserialize_datetime(data)
        elif klass == decimal.Decimal:
            return decimal.Decimal(data)
        elif issubclass(klass, Enum):
            return self.__deserialize_enum(data, klass)
        else:
            return self.__deserialize_model(data, klass)

    def parameters_to_tuples(self, params, collection_formats):
        """Get parameters as list of tuples, formatting collections.

        :param params: Parameters as dict or list of two-tuples
        :param dict collection_formats: Parameter collection formats
        :return: Parameters as list of tuples, collections formatted
        """
        new_params: List[Tuple[str, str]] = []
        if collection_formats is None:
            collection_formats = {}
        for k, v in params.items() if isinstance(params, dict) else params:
            if k in collection_formats:
                collection_format = collection_formats[k]
                if collection_format == 'multi':
                    new_params.extend((k, value) for value in v)
                else:
                    if collection_format == 'ssv':
                        delimiter = ' '
                    elif collection_format == 'tsv':
                        delimiter = '\t'
                    elif collection_format == 'pipes':
                        delimiter = '|'
                    else:  # csv is the default
                        delimiter = ','
                    new_params.append(
                        (k, delimiter.join(str(value) for value in v)))
            else:
                new_params.append((k, v))
        return new_params

    def parameters_to_url_query(self, params, collection_formats):
        """Get parameters as list of tuples, formatting collections.

        :param params: Parameters as dict or list of two-tuples
        :param dict collection_formats: Parameter collection formats
        :return: URL query string (e.g. a=Hello%20World&b=123)
        """
        new_params: List[Tuple[str, str]] = []
        if collection_formats is None:
            collection_formats = {}
        for k, v in params.items() if isinstance(params, dict) else params:
            if isinstance(v, bool):
                v = str(v).lower()
            if isinstance(v, (int, float)):
                v = str(v)
            if isinstance(v, dict):
                v = json.dumps(v)

            if k in collection_formats:
                collection_format = collection_formats[k]
                if collection_format == 'multi':
                    new_params.extend((k, str(value)) for value in v)
                else:
                    if collection_format == 'ssv':
                        delimiter = ' '
                    elif collection_format == 'tsv':
                        delimiter = '\t'
                    elif collection_format == 'pipes':
                        delimiter = '|'
                    else:  # csv is the default
                        delimiter = ','
                    new_params.append(
                        (k, delimiter.join(quote(str(value)) for value in v))
                    )
            else:
                new_params.append((k, quote(str(v))))

        return "&".join(["=".join(map(str, item)) for item in new_params])

    def files_parameters(
        self,
        files: Dict[str, Union[str, bytes, List[str], List[bytes], Tuple[str, bytes]]],
    ):
        """Builds form parameters.

        :param files: File parameters.
        :return: Form parameters with files.
        """
        params = []
        for k, v in files.items():
            if isinstance(v, str):
                with open(v, 'rb') as f:
                    filename = os.path.basename(f.name)
                    filedata = f.read()
            elif isinstance(v, bytes):
                filename = k
                filedata = v
            elif isinstance(v, tuple):
                filename, filedata = v
            elif isinstance(v, list):
                for file_param in v:
                    params.extend(self.files_parameters({k: file_param}))
                continue
            else:
                raise ValueError("Unsupported file value")
            mimetype = (
                mimetypes.guess_type(filename)[0]
                or 'application/octet-stream'
            )
            params.append(
                tuple([k, tuple([filename, filedata, mimetype])])
            )
        return params

    def select_header_accept(self, accepts: List[str]) -> Optional[str]:
        """Returns `Accept` based on an array of accepts provided.

        :param accepts: List of headers.
        :return: Accept (e.g. application/json).
        """
        if not accepts:
            return None

        for accept in accepts:
            if re.search('json', accept, re.IGNORECASE):
                return accept

        return accepts[0]

    def select_header_content_type(self, content_types):
        """Returns `Content-Type` based on an array of content_types provided.

        :param content_types: List of content-types.
        :return: Content-Type (e.g. application/json).
        """
        if not content_types:
            return None

        for content_type in content_types:
            if re.search('json', content_type, re.IGNORECASE):
                return content_type

        return content_types[0]

    def update_params_for_auth(
        self,
        headers,
        queries,
        auth_settings,
        resource_path,
        method,
        body,
        request_auth=None
    ) -> None:
        """Updates header and query params based on authentication setting.

        :param headers: Header parameters dict to be updated.
        :param queries: Query parameters tuple list to be updated.
        :param auth_settings: Authentication setting identifiers list.
        :resource_path: A string representation of the HTTP request resource path.
        :method: A string representation of the HTTP request method.
        :body: A object representing the body of the HTTP request.
        The object type is the return value of sanitize_for_serialization().
        :param request_auth: if set, the provided settings will
                             override the token in the configuration.
        """
        if not auth_settings:
            return

        if request_auth:
            self._apply_auth_params(
                headers,
                queries,
                resource_path,
                method,
                body,
                request_auth
            )
        else:
            for auth in auth_settings:
                auth_setting = self.configuration.auth_settings().get(auth)
                if auth_setting:
                    self._apply_auth_params(
                        headers,
                        queries,
                        resource_path,
                        method,
                        body,
                        auth_setting
                    )

    def _apply_auth_params(
        self,
        headers,
        queries,
        resource_path,
        method,
        body,
        auth_setting
    ) -> None:
        """Updates the request parameters based on a single auth_setting

        :param headers: Header parameters dict to be updated.
        :param queries: Query parameters tuple list to be updated.
        :resource_path: A string representation of the HTTP request resource path.
        :method: A string representation of the HTTP request method.
        :body: A object representing the body of the HTTP request.
        The object type is the return value of sanitize_for_serialization().
        :param auth_setting: auth settings for the endpoint
        """
        if auth_setting['in'] == 'cookie':
            headers['Cookie'] = auth_setting['value']
        elif auth_setting['in'] == 'header':
            if auth_setting['type'] != 'http-signature':
                headers[auth_setting['key']] = auth_setting['value']
        elif auth_setting['in'] == 'query':
            queries.append((auth_setting['key'], auth_setting['value']))
        else:
            raise ApiValueError(
                'Authentication token must be in `query` or `header`'
            )

    def __deserialize_file(self, response):
        """Deserializes body to file

        Saves response body into a file in a temporary folder,
        using the filename from the `Content-Disposition` header if provided.

        handle file downloading
        save response body into a tmp file and return the instance

        :param response:  RESTResponse.
        :return: file path.
        """
        fd, path = tempfile.mkstemp(dir=self.configuration.temp_folder_path)
        os.close(fd)
        os.remove(path)

        content_disposition = response.getheader("Content-Disposition")
        if content_disposition:
            m = re.search(
                r'filename=[\'"]?([^\'"\s]+)[\'"]?',
                content_disposition
            )
            assert m is not None, "Unexpected 'content-disposition' header value"
            filename = m.group(1)
            path = os.path.join(os.path.dirname(path), filename)

        with open(path, "wb") as f:
            f.write(response.data)

        return path

    def __deserialize_primitive(self, data, klass):
        """Deserializes string to primitive type.

        :param data: str.
        :param klass: class literal.

        :return: int, long, float, str, bool.
        """
        try:
            return klass(data)
        except UnicodeEncodeError:
            return str(data)
        except TypeError:
            return data

    def __deserialize_object(self, value):
        """Return an original value.

        :return: object.
        """
        return value

    def __deserialize_date(self, string):
        """Deserializes string to date.

        :param string: str.
        :return: date.
        """
        try:
            return parse(string).date()
        except ImportError:
            return string
        except ValueError:
            raise rest.ApiException(
                status=0,
                reason="Failed to parse `{0}` as date object".format(string)
            )

    def __deserialize_datetime(self, string):
        """Deserializes string to datetime.

        The string should be in iso8601 datetime format.

        :param string: str.
        :return: datetime.
        """
        try:
            return parse(string)
        except ImportError:
            return string
        except ValueError:
            raise rest.ApiException(
                status=0,
                reason=(
                    "Failed to parse `{0}` as datetime object"
                    .format(string)
                )
            )

    def __deserialize_enum(self, data, klass):
        """Deserializes primitive type to enum.

        :param data: primitive type.
        :param klass: class literal.
        :return: enum value.
        """
        try:
            return klass(data)
        except ValueError:
            raise rest.ApiException(
                status=0,
                reason=(
                    "Failed to parse `{0}` as `{1}`"
                    .format(data, klass)
                )
            )

    def __deserialize_model(self, data, klass):
        """Deserializes list or dict to model.

        :param data: dict, list.
        :param klass: class literal.
        :return: model object.
        """

        return klass.from_dict(data)
