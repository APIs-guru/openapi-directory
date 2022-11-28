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
import { CreateLifecyclePolicyRequest, CreateLifecyclePolicyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateLifecyclePolicyRequest = {
  headers: {
    xAmzAlgorithm: "dolores",
    xAmzContentSha256: "magni",
    xAmzCredential: "inventore",
    xAmzDate: "qui",
    xAmzSecurityToken: "ab",
    xAmzSignature: "accusantium",
    xAmzSignedHeaders: "aliquam",
  },
  request: {
    description: "rem",
    executionRoleArn: "et",
    policyDetails: {
      actions: [
        {
          crossRegionCopy: [
            {
              encryptionConfiguration: {
                cmkArn: "odit",
                encrypted: false,
              },
              retainRule: {
                interval: 3380463478881091391,
                intervalUnit: "YEARS",
              },
              target: "at",
            },
          ],
          name: "consequuntur",
        },
      ],
      eventSource: {
        parameters: {
          descriptionRegex: "libero",
          eventType: "shareSnapshot",
          snapshotOwner: [
            "sunt",
            "animi",
          ],
        },
        type: "MANAGED_CWE",
      },
      parameters: {
        excludeBootVolume: false,
        noReboot: true,
      },
      policyType: "EBS_SNAPSHOT_MANAGEMENT",
      resourceLocations: [
        "OUTPOST",
        "OUTPOST",
        "OUTPOST",
      ],
      resourceTypes: [
        "INSTANCE",
      ],
      schedules: [
        {
          copyTags: true,
          createRule: {
            cronExpression: "nemo",
            interval: 339904168827147199,
            intervalUnit: "HOURS",
            location: "OUTPOST_LOCAL",
            times: [
              "soluta",
              "enim",
            ],
          },
          crossRegionCopyRules: [
            {
              cmkArn: "quia",
              copyTags: false,
              deprecateRule: {
                interval: 4899267286538832296,
                intervalUnit: "WEEKS",
              },
              encrypted: false,
              retainRule: {
                interval: 2134753628428172799,
                intervalUnit: "WEEKS",
              },
              target: "adipisci",
              targetRegion: "qui",
            },
            {
              cmkArn: "iste",
              copyTags: true,
              deprecateRule: {
                interval: 3655015297049830863,
                intervalUnit: "WEEKS",
              },
              encrypted: false,
              retainRule: {
                interval: 2492105853915103689,
                intervalUnit: "MONTHS",
              },
              target: "dolores",
              targetRegion: "molestias",
            },
          ],
          deprecateRule: {
            count: 3173788743379359755,
            interval: 5360372200248054638,
            intervalUnit: "YEARS",
          },
          fastRestoreRule: {
            availabilityZones: [
              "ullam",
              "corrupti",
            ],
            count: 6840482267185682142,
            interval: 6532707090448363858,
            intervalUnit: "YEARS",
          },
          name: "magnam",
          retainRule: {
            count: 2074335382148546383,
            interval: 4970678582028186613,
            intervalUnit: "DAYS",
          },
          shareRules: [
            {
              targetAccounts: [
                "vel",
                "veniam",
              ],
              unshareInterval: 2856735946593628957,
              unshareIntervalUnit: "WEEKS",
            },
          ],
          tagsToAdd: [
            {
              key: "cumque",
              value: "ipsam",
            },
            {
              key: "consequatur",
              value: "a",
            },
            {
              key: "ullam",
              value: "dolor",
            },
          ],
          variableTags: [
            {
              key: "ducimus",
              value: "in",
            },
            {
              key: "enim",
              value: "iusto",
            },
          ],
        },
      ],
      targetTags: [
        {
          key: "deleniti",
          value: "consectetur",
        },
        {
          key: "dolores",
          value: "voluptate",
        },
      ],
    },
    state: "ENABLED",
    tags: {
      "reiciendis": "aut",
      "unde": "saepe",
      "ratione": "autem",
    },
  },
};

sdk.sdk.createLifecyclePolicy(req).then((res: CreateLifecyclePolicyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createLifecyclePolicy` - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* `deleteLifecyclePolicy` - Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
* `getLifecyclePolicies` - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* `getLifecyclePolicy` - Gets detailed information about the specified lifecycle policy.
* `listTagsForResource` - Lists the tags for the specified resource.
* `tagResource` - Adds the specified tags to the specified resource.
* `untagResource` - Removes the specified tags from the specified resource.
* `updateLifecyclePolicy` - Updates the specified lifecycle policy.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
