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
import { CreateExperimentTemplateRequest, CreateExperimentTemplateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateExperimentTemplateRequest = {
  headers: {
    xAmzAlgorithm: "facere",
    xAmzContentSha256: "deserunt",
    xAmzCredential: "illo",
    xAmzDate: "tempore",
    xAmzSecurityToken: "velit",
    xAmzSignature: "corporis",
    xAmzSignedHeaders: "quidem",
  },
  request: {
    actions: {
      "officiis": {
        actionId: "veniam",
        description: "ducimus",
        parameters: {
          "nobis": "aliquam",
          "qui": "debitis",
        },
        startAfter: [
          "consequatur",
          "iusto",
          "assumenda",
        ],
        targets: {
          "distinctio": "ut",
        },
      },
    },
    clientToken: "ut",
    description: "expedita",
    roleArn: "repellendus",
    stopConditions: [
      {
        source: "exercitationem",
        value: "nihil",
      },
      {
        source: "perferendis",
        value: "odit",
      },
    ],
    tags: {
      "dolore": "aliquam",
      "soluta": "accusantium",
    },
    targets: {
      "aut": {
        filters: [
          {
            path: "ex",
            values: [
              "nihil",
              "et",
              "deleniti",
            ],
          },
          {
            path: "minima",
            values: [
              "omnis",
              "eum",
            ],
          },
          {
            path: "error",
            values: [
              "sed",
              "ipsa",
              "explicabo",
            ],
          },
        ],
        resourceArns: [
          "corporis",
          "modi",
        ],
        resourceTags: {
          "odio": "expedita",
        },
        resourceType: "aliquid",
        selectionMode: "ipsum",
      },
      "saepe": {
        filters: [
          {
            path: "atque",
            values: [
              "suscipit",
            ],
          },
          {
            path: "architecto",
            values: [
              "ipsa",
              "quos",
            ],
          },
          {
            path: "voluptas",
            values: [
              "a",
              "iusto",
              "et",
            ],
          },
        ],
        resourceArns: [
          "voluptas",
          "nisi",
          "quia",
        ],
        resourceTags: {
          "corporis": "omnis",
          "dolores": "expedita",
        },
        resourceType: "enim",
        selectionMode: "quo",
      },
    },
  },
};

sdk.sdk.createExperimentTemplate(req).then((res: CreateExperimentTemplateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createExperimentTemplate` - <p>Creates an experiment template. </p> <p>To create a template, specify the following information: </p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your AWS environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">AWS Fault Injection Simulator User Guide</a>.</p>
* `deleteExperimentTemplate` - Deletes the specified experiment template.
* `getAction` - Gets information about the specified AWS FIS action.
* `getExperiment` - Gets information about the specified experiment.
* `getExperimentTemplate` - Gets information about the specified experiment template.
* `listActions` - Lists the available AWS FIS actions.
* `listExperimentTemplates` - Lists your experiment templates.
* `listExperiments` - Lists your experiments.
* `listTagsForResource` - Lists the tags for the specified resource.
* `startExperiment` - Starts running an experiment from the specified experiment template.
* `stopExperiment` - Stops the specified experiment.
* `tagResource` - Applies the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
* `updateExperimentTemplate` - Updates the specified experiment template.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
