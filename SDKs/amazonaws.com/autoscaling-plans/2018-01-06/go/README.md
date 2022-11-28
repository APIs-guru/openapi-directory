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
    
    req := operations.CreateScalingPlanRequest{
        Headers: operations.CreateScalingPlanHeaders{
            XAmzAlgorithm: "accusantium",
            XAmzContentSha256: "dolores",
            XAmzCredential: "et",
            XAmzDate: "quia",
            XAmzSecurityToken: "qui",
            XAmzSignature: "sit",
            XAmzSignedHeaders: "sint",
            XAmzTarget: "AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
        },
        Request: shared.CreateScalingPlanRequest{
            ApplicationSource: shared.ApplicationSource{
                CloudFormationStackArn: "nulla",
                TagFilters: []shared.TagFilter{
                    shared.TagFilter{
                        Key: "qui",
                        Values: []string{
                            "mollitia",
                        },
                    },
                    shared.TagFilter{
                        Key: "eveniet",
                        Values: []string{
                            "velit",
                            "qui",
                            "quam",
                        },
                    },
                },
            },
            ScalingInstructions: []shared.ScalingInstruction{
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "aperiam",
                                Value: "vel",
                            },
                            shared.MetricDimension{
                                Name: "reprehenderit",
                                Value: "nesciunt",
                            },
                        },
                        MetricName: "tenetur",
                        Namespace: "fugiat",
                        Statistic: "Maximum",
                        Unit: "dolor",
                    },
                    DisableDynamicScaling: true,
                    MaxCapacity: 6613185076334702367,
                    MinCapacity: 4780308856730821443,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ASGTotalCPUUtilization",
                        ResourceLabel: "maiores",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetMaxCapacityToForecastCapacity",
                    PredictiveScalingMaxCapacityBuffer: 1597956934861151791,
                    PredictiveScalingMode: "ForecastAndScale",
                    ResourceID: "ea",
                    ScalableDimension: "dynamodb:index:WriteCapacityUnits",
                    ScalingPolicyUpdateBehavior: "KeepExternalPolicies",
                    ScheduledActionBufferTime: 430554054357218177,
                    ServiceNamespace: "rds",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "amet",
                                        Value: "consectetur",
                                    },
                                    shared.MetricDimension{
                                        Name: "et",
                                        Value: "nesciunt",
                                    },
                                    shared.MetricDimension{
                                        Name: "ab",
                                        Value: "aut",
                                    },
                                },
                                MetricName: "sapiente",
                                Namespace: "ipsam",
                                Statistic: "SampleCount",
                                Unit: "placeat",
                            },
                            DisableScaleIn: true,
                            EstimatedInstanceWarmup: 1868051405901833186,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ASGAverageCPUUtilization",
                                ResourceLabel: "minus",
                            },
                            ScaleInCooldown: 2071104450853766658,
                            ScaleOutCooldown: 3143222963282786161,
                            TargetValue: 1.100000,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "atque",
                                        Value: "praesentium",
                                    },
                                    shared.MetricDimension{
                                        Name: "perferendis",
                                        Value: "ab",
                                    },
                                    shared.MetricDimension{
                                        Name: "cumque",
                                        Value: "minus",
                                    },
                                },
                                MetricName: "quo",
                                Namespace: "enim",
                                Statistic: "SampleCount",
                                Unit: "qui",
                            },
                            DisableScaleIn: true,
                            EstimatedInstanceWarmup: 6520533587378202877,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "EC2SpotFleetRequestAverageNetworkIn",
                                ResourceLabel: "ea",
                            },
                            ScaleInCooldown: 4655744335366111445,
                            ScaleOutCooldown: 316247834821120826,
                            TargetValue: 6.200000,
                        },
                    },
                },
                shared.ScalingInstruction{
                    CustomizedLoadMetricSpecification: &shared.CustomizedLoadMetricSpecification{
                        Dimensions: []shared.MetricDimension{
                            shared.MetricDimension{
                                Name: "et",
                                Value: "omnis",
                            },
                            shared.MetricDimension{
                                Name: "ut",
                                Value: "cum",
                            },
                            shared.MetricDimension{
                                Name: "hic",
                                Value: "qui",
                            },
                        },
                        MetricName: "cum",
                        Namespace: "facilis",
                        Statistic: "SampleCount",
                        Unit: "molestiae",
                    },
                    DisableDynamicScaling: false,
                    MaxCapacity: 8375052942067674244,
                    MinCapacity: 6391372909720997418,
                    PredefinedLoadMetricSpecification: &shared.PredefinedLoadMetricSpecification{
                        PredefinedLoadMetricType: "ALBTargetGroupRequestCount",
                        ResourceLabel: "quibusdam",
                    },
                    PredictiveScalingMaxCapacityBehavior: "SetMaxCapacityAboveForecastCapacity",
                    PredictiveScalingMaxCapacityBuffer: 4911635539947549177,
                    PredictiveScalingMode: "ForecastAndScale",
                    ResourceID: "praesentium",
                    ScalableDimension: "ecs:service:DesiredCount",
                    ScalingPolicyUpdateBehavior: "ReplaceExternalPolicies",
                    ScheduledActionBufferTime: 5702086962551646585,
                    ServiceNamespace: "dynamodb",
                    TargetTrackingConfigurations: []shared.TargetTrackingConfiguration{
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "doloribus",
                                        Value: "necessitatibus",
                                    },
                                    shared.MetricDimension{
                                        Name: "aliquam",
                                        Value: "ut",
                                    },
                                },
                                MetricName: "sint",
                                Namespace: "eos",
                                Statistic: "SampleCount",
                                Unit: "vitae",
                            },
                            DisableScaleIn: true,
                            EstimatedInstanceWarmup: 8708302418582466431,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ASGAverageNetworkOut",
                                ResourceLabel: "distinctio",
                            },
                            ScaleInCooldown: 6825038547171313815,
                            ScaleOutCooldown: 580042398029885359,
                            TargetValue: 93.199997,
                        },
                        shared.TargetTrackingConfiguration{
                            CustomizedScalingMetricSpecification: &shared.CustomizedScalingMetricSpecification{
                                Dimensions: []shared.MetricDimension{
                                    shared.MetricDimension{
                                        Name: "repudiandae",
                                        Value: "sed",
                                    },
                                },
                                MetricName: "praesentium",
                                Namespace: "cum",
                                Statistic: "SampleCount",
                                Unit: "odit",
                            },
                            DisableScaleIn: false,
                            EstimatedInstanceWarmup: 1865222027608673291,
                            PredefinedScalingMetricSpecification: &shared.PredefinedScalingMetricSpecification{
                                PredefinedScalingMetricType: "ASGAverageNetworkIn",
                                ResourceLabel: "ratione",
                            },
                            ScaleInCooldown: 1940187917623811174,
                            ScaleOutCooldown: 5802927950055087746,
                            TargetValue: 19.100000,
                        },
                    },
                },
            },
            ScalingPlanName: "ea",
        },
    }
    
    res, err := s.Sdk.CreateScalingPlan(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateScalingPlanResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateScalingPlan` - Creates a scaling plan. 
* `DeleteScalingPlan` - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* `DescribeScalingPlanResources` - Describes the scalable resources in the specified scaling plan.
* `DescribeScalingPlans` - Describes one or more of your scaling plans.
* `GetScalingPlanResourceForecastData` - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* `UpdateScalingPlan` - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
