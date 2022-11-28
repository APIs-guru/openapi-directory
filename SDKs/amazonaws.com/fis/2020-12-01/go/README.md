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
    
    req := operations.CreateExperimentTemplateRequest{
        Headers: operations.CreateExperimentTemplateHeaders{
            XAmzAlgorithm: "facere",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "illo",
            XAmzDate: "tempore",
            XAmzSecurityToken: "velit",
            XAmzSignature: "corporis",
            XAmzSignedHeaders: "quidem",
        },
        Request: operations.CreateExperimentTemplateRequestBody{
            Actions: map[string]shared.CreateExperimentTemplateActionInput{
                "officiis": shared.CreateExperimentTemplateActionInput{
                    ActionID: "veniam",
                    Description: "ducimus",
                    Parameters: map[string]string{
                        "nobis": "aliquam",
                        "qui": "debitis",
                    },
                    StartAfter: []string{
                        "consequatur",
                        "iusto",
                        "assumenda",
                    },
                    Targets: map[string]string{
                        "distinctio": "ut",
                    },
                },
            },
            ClientToken: "ut",
            Description: "expedita",
            RoleArn: "repellendus",
            StopConditions: []shared.CreateExperimentTemplateStopConditionInput{
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "exercitationem",
                    Value: "nihil",
                },
                shared.CreateExperimentTemplateStopConditionInput{
                    Source: "perferendis",
                    Value: "odit",
                },
            },
            Tags: map[string]string{
                "dolore": "aliquam",
                "soluta": "accusantium",
            },
            Targets: map[string]shared.CreateExperimentTemplateTargetInput{
                "aut": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "ex",
                            Values: []string{
                                "nihil",
                                "et",
                                "deleniti",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "minima",
                            Values: []string{
                                "omnis",
                                "eum",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "error",
                            Values: []string{
                                "sed",
                                "ipsa",
                                "explicabo",
                            },
                        },
                    },
                    ResourceArns: []string{
                        "corporis",
                        "modi",
                    },
                    ResourceTags: map[string]string{
                        "odio": "expedita",
                    },
                    ResourceType: "aliquid",
                    SelectionMode: "ipsum",
                },
                "saepe": shared.CreateExperimentTemplateTargetInput{
                    Filters: []shared.ExperimentTemplateTargetInputFilter{
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "atque",
                            Values: []string{
                                "suscipit",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "architecto",
                            Values: []string{
                                "ipsa",
                                "quos",
                            },
                        },
                        shared.ExperimentTemplateTargetInputFilter{
                            Path: "voluptas",
                            Values: []string{
                                "a",
                                "iusto",
                                "et",
                            },
                        },
                    },
                    ResourceArns: []string{
                        "voluptas",
                        "nisi",
                        "quia",
                    },
                    ResourceTags: map[string]string{
                        "corporis": "omnis",
                        "dolores": "expedita",
                    },
                    ResourceType: "enim",
                    SelectionMode: "quo",
                },
            },
        },
    }
    
    res, err := s.Sdk.CreateExperimentTemplate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExperimentTemplateResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateExperimentTemplate` - <p>Creates an experiment template. </p> <p>To create a template, specify the following information: </p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your AWS environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">AWS Fault Injection Simulator User Guide</a>.</p>
* `DeleteExperimentTemplate` - Deletes the specified experiment template.
* `GetAction` - Gets information about the specified AWS FIS action.
* `GetExperiment` - Gets information about the specified experiment.
* `GetExperimentTemplate` - Gets information about the specified experiment template.
* `ListActions` - Lists the available AWS FIS actions.
* `ListExperimentTemplates` - Lists your experiment templates.
* `ListExperiments` - Lists your experiments.
* `ListTagsForResource` - Lists the tags for the specified resource.
* `StartExperiment` - Starts running an experiment from the specified experiment template.
* `StopExperiment` - Stops the specified experiment.
* `TagResource` - Applies the specified tags to the specified resource.
* `UntagResource` - Removes the specified tags from the specified resource.
* `UpdateExperimentTemplate` - Updates the specified experiment template.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
