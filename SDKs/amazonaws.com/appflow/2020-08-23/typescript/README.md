# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { CreateConnectorProfileRequest, CreateConnectorProfileResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateConnectorProfileRequest = {
  headers: {
    xAmzAlgorithm: "laboriosam",
    xAmzContentSha256: "velit",
    xAmzCredential: "ea",
    xAmzDate: "tempore",
    xAmzSecurityToken: "fugit",
    xAmzSignature: "aut",
    xAmzSignedHeaders: "tempora",
  },
  request: {
    connectionMode: "Public",
    connectorProfileConfig: {
      connectorProfileCredentials: {
        amplitude: {
          apiKey: "mollitia",
          secretKey: "non",
        },
        datadog: {
          apiKey: "magni",
          applicationKey: "recusandae",
        },
        dynatrace: {
          apiToken: "illum",
        },
        googleAnalytics: {
          accessToken: "consequatur",
          clientId: "dolores",
          clientSecret: "hic",
          oAuthRequest: {
            authCode: "nihil",
            redirectUri: "explicabo",
          },
          refreshToken: "ex",
        },
        honeycode: {
          accessToken: "iure",
          oAuthRequest: {
            authCode: "et",
            redirectUri: "quos",
          },
          refreshToken: "et",
        },
        inforNexus: {
          accessKeyId: "explicabo",
          datakey: "necessitatibus",
          secretAccessKey: "veniam",
          userId: "qui",
        },
        marketo: {
          accessToken: "in",
          clientId: "odit",
          clientSecret: "molestias",
          oAuthRequest: {
            authCode: "corporis",
            redirectUri: "tenetur",
          },
        },
        redshift: {
          password: "esse",
          username: "similique",
        },
        sapoData: {
          basicAuthCredentials: {
            password: "mollitia",
            username: "id",
          },
          oAuthCredentials: {
            accessToken: "laboriosam",
            clientId: "quam",
            clientSecret: "maiores",
            oAuthRequest: {
              authCode: "totam",
              redirectUri: "iusto",
            },
            refreshToken: "aperiam",
          },
        },
        salesforce: {
          accessToken: "repellendus",
          clientCredentialsArn: "sunt",
          oAuthRequest: {
            authCode: "eum",
            redirectUri: "earum",
          },
          refreshToken: "et",
        },
        serviceNow: {
          password: "officia",
          username: "aut",
        },
        singular: {
          apiKey: "dolor",
        },
        slack: {
          accessToken: "quia",
          clientId: "quaerat",
          clientSecret: "ea",
          oAuthRequest: {
            authCode: "et",
            redirectUri: "expedita",
          },
        },
        snowflake: {
          password: "recusandae",
          username: "qui",
        },
        trendmicro: {
          apiSecretKey: "qui",
        },
        veeva: {
          password: "aut",
          username: "explicabo",
        },
        zendesk: {
          accessToken: "cupiditate",
          clientId: "temporibus",
          clientSecret: "saepe",
          oAuthRequest: {
            authCode: "sed",
            redirectUri: "voluptatem",
          },
        },
      },
      connectorProfileProperties: {
        amplitude: {
          "fugiat": "nesciunt",
          "et": "qui",
        },
        datadog: {
          instanceUrl: "quis",
        },
        dynatrace: {
          instanceUrl: "eligendi",
        },
        googleAnalytics: {
          "fuga": "aliquid",
        },
        honeycode: {
          "aut": "et",
          "voluptatem": "sunt",
        },
        inforNexus: {
          instanceUrl: "quae",
        },
        marketo: {
          instanceUrl: "placeat",
        },
        redshift: {
          bucketName: "vitae",
          bucketPrefix: "rerum",
          databaseUrl: "officiis",
          roleArn: "commodi",
        },
        sapoData: {
          applicationHostUrl: "sed",
          applicationServicePath: "voluptates",
          clientNumber: "enim",
          logonLanguage: "eos",
          oAuthProperties: {
            authCodeUrl: "ipsa",
            oAuthScopes: [
              "sint",
            ],
            tokenUrl: "aut",
          },
          portNumber: 8912790974007895797,
          privateLinkServiceName: "facilis",
        },
        salesforce: {
          instanceUrl: "et",
          isSandboxEnvironment: false,
        },
        serviceNow: {
          instanceUrl: "et",
        },
        singular: {
          "sit": "voluptate",
        },
        slack: {
          instanceUrl: "eaque",
        },
        snowflake: {
          accountName: "consequuntur",
          bucketName: "et",
          bucketPrefix: "amet",
          privateLinkServiceName: "distinctio",
          region: "in",
          stage: "consectetur",
          warehouse: "minima",
        },
        trendmicro: {
          "et": "consequatur",
          "eum": "sunt",
        },
        veeva: {
          instanceUrl: "cupiditate",
        },
        zendesk: {
          instanceUrl: "quam",
        },
      },
    },
    connectorProfileName: "repellendus",
    connectorType: "Trendmicro",
    kmsArn: "nihil",
  },
};

sdk.sdk.createConnectorProfile(req).then((res: CreateConnectorProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createConnectorProfile` -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. 
* `createFlow` -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 
* `deleteConnectorProfile` -  Enables you to delete an existing connector profile. 
* `deleteFlow` -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 
* `describeConnectorEntity` -  Provides details regarding the entity used with the connector, with a description of the data model for each entity. 
* `describeConnectorProfiles` - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
* `describeConnectors` -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 
* `describeFlow` -  Provides a description of the specified flow. 
* `describeFlowExecutionRecords` -  Fetches the execution history of the flow. 
* `listConnectorEntities` -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 
* `listFlows` -  Lists all of the flows associated with your account. 
* `listTagsForResource` -  Retrieves the tags that are associated with a specified flow. 
* `startFlow` -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 
* `stopFlow` -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 
* `tagResource` -  Applies a tag to the specified flow. 
* `untagResource` -  Removes a tag from the specified flow. 
* `updateConnectorProfile` -  Updates a given connector profile associated with your account. 
* `updateFlow` -  Updates an existing flow. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
