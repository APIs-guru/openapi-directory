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
import { CreateAppRequest, CreateAppResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateAppRequest = {
  headers: {
    xAmzAlgorithm: "distinctio",
    xAmzContentSha256: "delectus",
    xAmzCredential: "rerum",
    xAmzDate: "dolore",
    xAmzSecurityToken: "repellat",
    xAmzSignature: "velit",
    xAmzSignedHeaders: "officia",
  },
  request: {
    accessToken: "modi",
    autoBranchCreationConfig: {
      basicAuthCredentials: "sunt",
      buildSpec: "voluptas",
      enableAutoBuild: false,
      enableBasicAuth: true,
      enablePerformanceMode: true,
      enablePullRequestPreview: false,
      environmentVariables: {
        "autem": "corporis",
      },
      framework: "dicta",
      pullRequestEnvironmentName: "rem",
      stage: "BETA",
    },
    autoBranchCreationPatterns: [
      "nisi",
    ],
    basicAuthCredentials: "recusandae",
    buildSpec: "qui",
    customHeaders: "minus",
    customRules: [
      {
        condition: "rerum",
        source: "ut",
        status: "rem",
        target: "eos",
      },
      {
        condition: "et",
        source: "reiciendis",
        status: "aspernatur",
        target: "praesentium",
      },
      {
        condition: "porro",
        source: "nihil",
        status: "adipisci",
        target: "consequatur",
      },
    ],
    description: "illum",
    enableAutoBranchCreation: false,
    enableBasicAuth: true,
    enableBranchAutoBuild: true,
    enableBranchAutoDeletion: true,
    environmentVariables: {
      "est": "quo",
      "vero": "alias",
      "totam": "deserunt",
    },
    iamServiceRoleArn: "eius",
    name: "repellat",
    oauthToken: "beatae",
    platform: "WEB",
    repository: "totam",
    tags: {
      "et": "magni",
      "necessitatibus": "et",
    },
  },
};

sdk.sdk.createApp(req).then((res: CreateAppResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createApp` -  Creates a new Amplify app. 
* `createBackendEnvironment` -  Creates a new backend environment for an Amplify app. 
* `createBranch` -  Creates a new branch for an Amplify app. 
* `createDeployment` -  Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 
* `createDomainAssociation` -  Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 
* `createWebhook` -  Creates a new webhook on an Amplify app. 
* `deleteApp` -  Deletes an existing Amplify app specified by an app ID. 
* `deleteBackendEnvironment` -  Deletes a backend environment for an Amplify app. 
* `deleteBranch` -  Deletes a branch for an Amplify app. 
* `deleteDomainAssociation` -  Deletes a domain association for an Amplify app. 
* `deleteJob` -  Deletes a job for a branch of an Amplify app. 
* `deleteWebhook` -  Deletes a webhook. 
* `generateAccessLogs` -  Returns the website access logs for a specific time range using a presigned URL. 
* `getApp` -  Returns an existing Amplify app by appID. 
* `getArtifactUrl` -  Returns the artifact info that corresponds to an artifact id. 
* `getBackendEnvironment` -  Returns a backend environment for an Amplify app. 
* `getBranch` -  Returns a branch for an Amplify app. 
* `getDomainAssociation` -  Returns the domain information for an Amplify app. 
* `getJob` -  Returns a job for a branch of an Amplify app. 
* `getWebhook` -  Returns the webhook information that corresponds to a specified webhook ID. 
* `listApps` -  Returns a list of the existing Amplify apps. 
* `listArtifacts` -  Returns a list of artifacts for a specified app, branch, and job. 
* `listBackendEnvironments` -  Lists the backend environments for an Amplify app. 
* `listBranches` -  Lists the branches of an Amplify app. 
* `listDomainAssociations` -  Returns the domain associations for an Amplify app. 
* `listJobs` -  Lists the jobs for a branch of an Amplify app. 
* `listTagsForResource` -  Returns a list of tags for a specified Amazon Resource Name (ARN). 
* `listWebhooks` -  Returns a list of webhooks for an Amplify app. 
* `startDeployment` -  Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 
* `startJob` -  Starts a new job for a branch of an Amplify app. 
* `stopJob` -  Stops a job that is in progress for a branch of an Amplify app. 
* `tagResource` -  Tags the resource with a tag key and value. 
* `untagResource` -  Untags a resource with a specified Amazon Resource Name (ARN). 
* `updateApp` -  Updates an existing Amplify app. 
* `updateBranch` -  Updates a branch for an Amplify app. 
* `updateDomainAssociation` -  Creates a new domain association for an Amplify app.
* `updateWebhook` -  Updates a webhook. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
