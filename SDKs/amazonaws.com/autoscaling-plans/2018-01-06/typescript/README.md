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
import { CreateScalingPlanRequest, CreateScalingPlanResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateScalingPlanRequest = {
  headers: {
    xAmzAlgorithm: "accusantium",
    xAmzContentSha256: "dolores",
    xAmzCredential: "et",
    xAmzDate: "quia",
    xAmzSecurityToken: "qui",
    xAmzSignature: "sit",
    xAmzSignedHeaders: "sint",
    xAmzTarget: "AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
  },
  request: {
    applicationSource: {
      cloudFormationStackArn: "nulla",
      tagFilters: [
        {
          key: "qui",
          values: [
            "mollitia",
          ],
        },
        {
          key: "eveniet",
          values: [
            "velit",
            "qui",
            "quam",
          ],
        },
      ],
    },
    scalingInstructions: [
      {
        customizedLoadMetricSpecification: {
          dimensions: [
            {
              name: "aperiam",
              value: "vel",
            },
            {
              name: "reprehenderit",
              value: "nesciunt",
            },
          ],
          metricName: "tenetur",
          namespace: "fugiat",
          statistic: "Maximum",
          unit: "dolor",
        },
        disableDynamicScaling: true,
        maxCapacity: 6613185076334702367,
        minCapacity: 4780308856730821443,
        predefinedLoadMetricSpecification: {
          predefinedLoadMetricType: "ASGTotalCPUUtilization",
          resourceLabel: "maiores",
        },
        predictiveScalingMaxCapacityBehavior: "SetMaxCapacityToForecastCapacity",
        predictiveScalingMaxCapacityBuffer: 1597956934861151791,
        predictiveScalingMode: "ForecastAndScale",
        resourceId: "ea",
        scalableDimension: "dynamodb:index:WriteCapacityUnits",
        scalingPolicyUpdateBehavior: "KeepExternalPolicies",
        scheduledActionBufferTime: 430554054357218177,
        serviceNamespace: "rds",
        targetTrackingConfigurations: [
          {
            customizedScalingMetricSpecification: {
              dimensions: [
                {
                  name: "amet",
                  value: "consectetur",
                },
                {
                  name: "et",
                  value: "nesciunt",
                },
                {
                  name: "ab",
                  value: "aut",
                },
              ],
              metricName: "sapiente",
              namespace: "ipsam",
              statistic: "SampleCount",
              unit: "placeat",
            },
            disableScaleIn: true,
            estimatedInstanceWarmup: 1868051405901833186,
            predefinedScalingMetricSpecification: {
              predefinedScalingMetricType: "ASGAverageCPUUtilization",
              resourceLabel: "minus",
            },
            scaleInCooldown: 2071104450853766658,
            scaleOutCooldown: 3143222963282786161,
            targetValue: 1.100000,
          },
          {
            customizedScalingMetricSpecification: {
              dimensions: [
                {
                  name: "atque",
                  value: "praesentium",
                },
                {
                  name: "perferendis",
                  value: "ab",
                },
                {
                  name: "cumque",
                  value: "minus",
                },
              ],
              metricName: "quo",
              namespace: "enim",
              statistic: "SampleCount",
              unit: "qui",
            },
            disableScaleIn: true,
            estimatedInstanceWarmup: 6520533587378202877,
            predefinedScalingMetricSpecification: {
              predefinedScalingMetricType: "EC2SpotFleetRequestAverageNetworkIn",
              resourceLabel: "ea",
            },
            scaleInCooldown: 4655744335366111445,
            scaleOutCooldown: 316247834821120826,
            targetValue: 6.200000,
          },
        ],
      },
      {
        customizedLoadMetricSpecification: {
          dimensions: [
            {
              name: "et",
              value: "omnis",
            },
            {
              name: "ut",
              value: "cum",
            },
            {
              name: "hic",
              value: "qui",
            },
          ],
          metricName: "cum",
          namespace: "facilis",
          statistic: "SampleCount",
          unit: "molestiae",
        },
        disableDynamicScaling: false,
        maxCapacity: 8375052942067674244,
        minCapacity: 6391372909720997418,
        predefinedLoadMetricSpecification: {
          predefinedLoadMetricType: "ALBTargetGroupRequestCount",
          resourceLabel: "quibusdam",
        },
        predictiveScalingMaxCapacityBehavior: "SetMaxCapacityAboveForecastCapacity",
        predictiveScalingMaxCapacityBuffer: 4911635539947549177,
        predictiveScalingMode: "ForecastAndScale",
        resourceId: "praesentium",
        scalableDimension: "ecs:service:DesiredCount",
        scalingPolicyUpdateBehavior: "ReplaceExternalPolicies",
        scheduledActionBufferTime: 5702086962551646585,
        serviceNamespace: "dynamodb",
        targetTrackingConfigurations: [
          {
            customizedScalingMetricSpecification: {
              dimensions: [
                {
                  name: "doloribus",
                  value: "necessitatibus",
                },
                {
                  name: "aliquam",
                  value: "ut",
                },
              ],
              metricName: "sint",
              namespace: "eos",
              statistic: "SampleCount",
              unit: "vitae",
            },
            disableScaleIn: true,
            estimatedInstanceWarmup: 8708302418582466431,
            predefinedScalingMetricSpecification: {
              predefinedScalingMetricType: "ASGAverageNetworkOut",
              resourceLabel: "distinctio",
            },
            scaleInCooldown: 6825038547171313815,
            scaleOutCooldown: 580042398029885359,
            targetValue: 93.199997,
          },
          {
            customizedScalingMetricSpecification: {
              dimensions: [
                {
                  name: "repudiandae",
                  value: "sed",
                },
              ],
              metricName: "praesentium",
              namespace: "cum",
              statistic: "SampleCount",
              unit: "odit",
            },
            disableScaleIn: false,
            estimatedInstanceWarmup: 1865222027608673291,
            predefinedScalingMetricSpecification: {
              predefinedScalingMetricType: "ASGAverageNetworkIn",
              resourceLabel: "ratione",
            },
            scaleInCooldown: 1940187917623811174,
            scaleOutCooldown: 5802927950055087746,
            targetValue: 19.100000,
          },
        ],
      },
    ],
    scalingPlanName: "ea",
  },
};

sdk.sdk.createScalingPlan(req).then((res: CreateScalingPlanResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createScalingPlan` - Creates a scaling plan. 
* `deleteScalingPlan` - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* `describeScalingPlanResources` - Describes the scalable resources in the specified scaling plan.
* `describeScalingPlans` - Describes one or more of your scaling plans.
* `getScalingPlanResourceForecastData` - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* `updateScalingPlan` - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
