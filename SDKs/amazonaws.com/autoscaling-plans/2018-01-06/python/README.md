# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateScalingPlanRequest(
    headers=operations.CreateScalingPlanHeaders(
        x_amz_algorithm="accusantium",
        x_amz_content_sha256="dolores",
        x_amz_credential="et",
        x_amz_date="quia",
        x_amz_security_token="qui",
        x_amz_signature="sit",
        x_amz_signed_headers="sint",
        x_amz_target="AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
    ),
    request=shared.CreateScalingPlanRequest(
        application_source=shared.ApplicationSource(
            cloud_formation_stack_arn="nulla",
            tag_filters=[
                shared.TagFilter(
                    key="qui",
                    values=[
                        "mollitia",
                    ],
                ),
                shared.TagFilter(
                    key="eveniet",
                    values=[
                        "velit",
                        "qui",
                        "quam",
                    ],
                ),
            ],
        ),
        scaling_instructions=[
            shared.ScalingInstruction(
                customized_load_metric_specification=shared.CustomizedLoadMetricSpecification(
                    dimensions=[
                        shared.MetricDimension(
                            name="aperiam",
                            value="vel",
                        ),
                        shared.MetricDimension(
                            name="reprehenderit",
                            value="nesciunt",
                        ),
                    ],
                    metric_name="tenetur",
                    namespace="fugiat",
                    statistic="Maximum",
                    unit="dolor",
                ),
                disable_dynamic_scaling=True,
                max_capacity=6613185076334702367,
                min_capacity=4780308856730821443,
                predefined_load_metric_specification=shared.PredefinedLoadMetricSpecification(
                    predefined_load_metric_type="ASGTotalCPUUtilization",
                    resource_label="maiores",
                ),
                predictive_scaling_max_capacity_behavior="SetMaxCapacityToForecastCapacity",
                predictive_scaling_max_capacity_buffer=1597956934861151791,
                predictive_scaling_mode="ForecastAndScale",
                resource_id="ea",
                scalable_dimension="dynamodb:index:WriteCapacityUnits",
                scaling_policy_update_behavior="KeepExternalPolicies",
                scheduled_action_buffer_time=430554054357218177,
                service_namespace="rds",
                target_tracking_configurations=[
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="amet",
                                    value="consectetur",
                                ),
                                shared.MetricDimension(
                                    name="et",
                                    value="nesciunt",
                                ),
                                shared.MetricDimension(
                                    name="ab",
                                    value="aut",
                                ),
                            ],
                            metric_name="sapiente",
                            namespace="ipsam",
                            statistic="SampleCount",
                            unit="placeat",
                        ),
                        disable_scale_in=True,
                        estimated_instance_warmup=1868051405901833186,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="ASGAverageCPUUtilization",
                            resource_label="minus",
                        ),
                        scale_in_cooldown=2071104450853766658,
                        scale_out_cooldown=3143222963282786161,
                        target_value=1.100000,
                    ),
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="atque",
                                    value="praesentium",
                                ),
                                shared.MetricDimension(
                                    name="perferendis",
                                    value="ab",
                                ),
                                shared.MetricDimension(
                                    name="cumque",
                                    value="minus",
                                ),
                            ],
                            metric_name="quo",
                            namespace="enim",
                            statistic="SampleCount",
                            unit="qui",
                        ),
                        disable_scale_in=True,
                        estimated_instance_warmup=6520533587378202877,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="EC2SpotFleetRequestAverageNetworkIn",
                            resource_label="ea",
                        ),
                        scale_in_cooldown=4655744335366111445,
                        scale_out_cooldown=316247834821120826,
                        target_value=6.200000,
                    ),
                ],
            ),
            shared.ScalingInstruction(
                customized_load_metric_specification=shared.CustomizedLoadMetricSpecification(
                    dimensions=[
                        shared.MetricDimension(
                            name="et",
                            value="omnis",
                        ),
                        shared.MetricDimension(
                            name="ut",
                            value="cum",
                        ),
                        shared.MetricDimension(
                            name="hic",
                            value="qui",
                        ),
                    ],
                    metric_name="cum",
                    namespace="facilis",
                    statistic="SampleCount",
                    unit="molestiae",
                ),
                disable_dynamic_scaling=False,
                max_capacity=8375052942067674244,
                min_capacity=6391372909720997418,
                predefined_load_metric_specification=shared.PredefinedLoadMetricSpecification(
                    predefined_load_metric_type="ALBTargetGroupRequestCount",
                    resource_label="quibusdam",
                ),
                predictive_scaling_max_capacity_behavior="SetMaxCapacityAboveForecastCapacity",
                predictive_scaling_max_capacity_buffer=4911635539947549177,
                predictive_scaling_mode="ForecastAndScale",
                resource_id="praesentium",
                scalable_dimension="ecs:service:DesiredCount",
                scaling_policy_update_behavior="ReplaceExternalPolicies",
                scheduled_action_buffer_time=5702086962551646585,
                service_namespace="dynamodb",
                target_tracking_configurations=[
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="doloribus",
                                    value="necessitatibus",
                                ),
                                shared.MetricDimension(
                                    name="aliquam",
                                    value="ut",
                                ),
                            ],
                            metric_name="sint",
                            namespace="eos",
                            statistic="SampleCount",
                            unit="vitae",
                        ),
                        disable_scale_in=True,
                        estimated_instance_warmup=8708302418582466431,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="ASGAverageNetworkOut",
                            resource_label="distinctio",
                        ),
                        scale_in_cooldown=6825038547171313815,
                        scale_out_cooldown=580042398029885359,
                        target_value=93.199997,
                    ),
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="repudiandae",
                                    value="sed",
                                ),
                            ],
                            metric_name="praesentium",
                            namespace="cum",
                            statistic="SampleCount",
                            unit="odit",
                        ),
                        disable_scale_in=False,
                        estimated_instance_warmup=1865222027608673291,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="ASGAverageNetworkIn",
                            resource_label="ratione",
                        ),
                        scale_in_cooldown=1940187917623811174,
                        scale_out_cooldown=5802927950055087746,
                        target_value=19.100000,
                    ),
                ],
            ),
        ],
        scaling_plan_name="ea",
    ),
)
    
res = s.sdk.create_scaling_plan(req)

if res.create_scaling_plan_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_scaling_plan` - Creates a scaling plan. 
* `delete_scaling_plan` - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* `describe_scaling_plan_resources` - Describes the scalable resources in the specified scaling plan.
* `describe_scaling_plans` - Describes one or more of your scaling plans.
* `get_scaling_plan_resource_forecast_data` - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* `update_scaling_plan` - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
