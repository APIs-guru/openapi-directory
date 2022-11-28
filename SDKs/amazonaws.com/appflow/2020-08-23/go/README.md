# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateConnectorProfileRequest{
        Headers: operations.CreateConnectorProfileHeaders{
            XAmzAlgorithm: "laboriosam",
            XAmzContentSha256: "velit",
            XAmzCredential: "ea",
            XAmzDate: "tempore",
            XAmzSecurityToken: "fugit",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "tempora",
        },
        Request: operations.CreateConnectorProfileRequestBody{
            ConnectionMode: "Public",
            ConnectorProfileConfig: operations.CreateConnectorProfileRequestBodyConnectorProfileConfig{
                ConnectorProfileCredentials: &shared.ConnectorProfileCredentials{
                    Amplitude: &shared.AmplitudeConnectorProfileCredentials{
                        APIKey: "mollitia",
                        SecretKey: "non",
                    },
                    Datadog: &shared.DatadogConnectorProfileCredentials{
                        APIKey: "magni",
                        ApplicationKey: "recusandae",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileCredentials{
                        APIToken: "illum",
                    },
                    GoogleAnalytics: &shared.GoogleAnalyticsConnectorProfileCredentials{
                        AccessToken: "consequatur",
                        ClientID: "dolores",
                        ClientSecret: "hic",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "nihil",
                            RedirectURI: "explicabo",
                        },
                        RefreshToken: "ex",
                    },
                    Honeycode: &shared.HoneycodeConnectorProfileCredentials{
                        AccessToken: "iure",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "et",
                            RedirectURI: "quos",
                        },
                        RefreshToken: "et",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileCredentials{
                        AccessKeyID: "explicabo",
                        Datakey: "necessitatibus",
                        SecretAccessKey: "veniam",
                        UserID: "qui",
                    },
                    Marketo: &shared.MarketoConnectorProfileCredentials{
                        AccessToken: "in",
                        ClientID: "odit",
                        ClientSecret: "molestias",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "corporis",
                            RedirectURI: "tenetur",
                        },
                    },
                    Redshift: &shared.RedshiftConnectorProfileCredentials{
                        Password: "esse",
                        Username: "similique",
                    },
                    SapoData: &shared.SapoDataConnectorProfileCredentials{
                        BasicAuthCredentials: &shared.BasicAuthCredentials{
                            Password: "mollitia",
                            Username: "id",
                        },
                        OAuthCredentials: &shared.OAuthCredentials{
                            AccessToken: "laboriosam",
                            ClientID: "quam",
                            ClientSecret: "maiores",
                            OAuthRequest: &shared.ConnectorOAuthRequest{
                                AuthCode: "totam",
                                RedirectURI: "iusto",
                            },
                            RefreshToken: "aperiam",
                        },
                    },
                    Salesforce: &shared.SalesforceConnectorProfileCredentials{
                        AccessToken: "repellendus",
                        ClientCredentialsArn: "sunt",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "eum",
                            RedirectURI: "earum",
                        },
                        RefreshToken: "et",
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileCredentials{
                        Password: "officia",
                        Username: "aut",
                    },
                    Singular: &shared.SingularConnectorProfileCredentials{
                        APIKey: "dolor",
                    },
                    Slack: &shared.SlackConnectorProfileCredentials{
                        AccessToken: "quia",
                        ClientID: "quaerat",
                        ClientSecret: "ea",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "et",
                            RedirectURI: "expedita",
                        },
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileCredentials{
                        Password: "recusandae",
                        Username: "qui",
                    },
                    Trendmicro: &shared.TrendmicroConnectorProfileCredentials{
                        APISecretKey: "qui",
                    },
                    Veeva: &shared.VeevaConnectorProfileCredentials{
                        Password: "aut",
                        Username: "explicabo",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileCredentials{
                        AccessToken: "cupiditate",
                        ClientID: "temporibus",
                        ClientSecret: "saepe",
                        OAuthRequest: &shared.ConnectorOAuthRequest{
                            AuthCode: "sed",
                            RedirectURI: "voluptatem",
                        },
                    },
                },
                ConnectorProfileProperties: &shared.ConnectorProfileProperties{
                    Amplitude: map[string]interface{}{
                        "fugiat": "nesciunt",
                        "et": "qui",
                    },
                    Datadog: &shared.DatadogConnectorProfileProperties{
                        InstanceURL: "quis",
                    },
                    Dynatrace: &shared.DynatraceConnectorProfileProperties{
                        InstanceURL: "eligendi",
                    },
                    GoogleAnalytics: map[string]interface{}{
                        "fuga": "aliquid",
                    },
                    Honeycode: map[string]interface{}{
                        "aut": "et",
                        "voluptatem": "sunt",
                    },
                    InforNexus: &shared.InforNexusConnectorProfileProperties{
                        InstanceURL: "quae",
                    },
                    Marketo: &shared.MarketoConnectorProfileProperties{
                        InstanceURL: "placeat",
                    },
                    Redshift: &shared.RedshiftConnectorProfileProperties{
                        BucketName: "vitae",
                        BucketPrefix: "rerum",
                        DatabaseURL: "officiis",
                        RoleArn: "commodi",
                    },
                    SapoData: &shared.SapoDataConnectorProfileProperties{
                        ApplicationHostURL: "sed",
                        ApplicationServicePath: "voluptates",
                        ClientNumber: "enim",
                        LogonLanguage: "eos",
                        OAuthProperties: &shared.OAuthProperties{
                            AuthCodeURL: "ipsa",
                            OAuthScopes: []string{
                                "sint",
                            },
                            TokenURL: "aut",
                        },
                        PortNumber: 8912790974007895797,
                        PrivateLinkServiceName: "facilis",
                    },
                    Salesforce: &shared.SalesforceConnectorProfileProperties{
                        InstanceURL: "et",
                        IsSandboxEnvironment: false,
                    },
                    ServiceNow: &shared.ServiceNowConnectorProfileProperties{
                        InstanceURL: "et",
                    },
                    Singular: map[string]interface{}{
                        "sit": "voluptate",
                    },
                    Slack: &shared.SlackConnectorProfileProperties{
                        InstanceURL: "eaque",
                    },
                    Snowflake: &shared.SnowflakeConnectorProfileProperties{
                        AccountName: "consequuntur",
                        BucketName: "et",
                        BucketPrefix: "amet",
                        PrivateLinkServiceName: "distinctio",
                        Region: "in",
                        Stage: "consectetur",
                        Warehouse: "minima",
                    },
                    Trendmicro: map[string]interface{}{
                        "et": "consequatur",
                        "eum": "sunt",
                    },
                    Veeva: &shared.VeevaConnectorProfileProperties{
                        InstanceURL: "cupiditate",
                    },
                    Zendesk: &shared.ZendeskConnectorProfileProperties{
                        InstanceURL: "quam",
                    },
                },
            },
            ConnectorProfileName: "repellendus",
            ConnectorType: "Trendmicro",
            KmsArn: "nihil",
        },
    }
    
    res, err := s.Sdk.CreateConnectorProfile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectorProfileResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateConnectorProfile` -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. 
* `CreateFlow` -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* `DeleteConnectorProfile` -  Enables you to delete an existing connector profile. 
* `DeleteFlow` -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* `DescribeConnectorEntity` -  Provides details regarding the entity used with the connector, with a description of the data model for each entity. 
* `DescribeConnectorProfiles` - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* `DescribeConnectors` -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* `DescribeFlow` -  Provides a description of the specified flow. 
* `DescribeFlowExecutionRecords` -  Fetches the execution history of the flow. 
* `ListConnectorEntities` -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* `ListFlows` -  Lists all of the flows associated with your account. 
* `ListTagsForResource` -  Retrieves the tags that are associated with a specified flow. 
* `StartFlow` -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* `StopFlow` -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* `TagResource` -  Applies a tag to the specified flow. 
* `UntagResource` -  Removes a tag from the specified flow. 
* `UpdateConnectorProfile` -  Updates a given connector profile associated with your account. 
* `UpdateFlow` -  Updates an existing flow. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
