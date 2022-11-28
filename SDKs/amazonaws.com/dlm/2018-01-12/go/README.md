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
    
    req := operations.CreateLifecyclePolicyRequest{
        Headers: operations.CreateLifecyclePolicyHeaders{
            XAmzAlgorithm: "dolores",
            XAmzContentSha256: "magni",
            XAmzCredential: "inventore",
            XAmzDate: "qui",
            XAmzSecurityToken: "ab",
            XAmzSignature: "accusantium",
            XAmzSignedHeaders: "aliquam",
        },
        Request: operations.CreateLifecyclePolicyRequestBody{
            Description: "rem",
            ExecutionRoleArn: "et",
            PolicyDetails: operations.CreateLifecyclePolicyRequestBodyPolicyDetails{
                Actions: []shared.Action{
                    shared.Action{
                        CrossRegionCopy: []shared.CrossRegionCopyAction{
                            shared.CrossRegionCopyAction{
                                EncryptionConfiguration: shared.EncryptionConfiguration{
                                    CmkArn: "odit",
                                    Encrypted: false,
                                },
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 3380463478881091391,
                                    IntervalUnit: "YEARS",
                                },
                                Target: "at",
                            },
                        },
                        Name: "consequuntur",
                    },
                },
                EventSource: &shared.EventSource{
                    Parameters: &shared.EventParameters{
                        DescriptionRegex: "libero",
                        EventType: "shareSnapshot",
                        SnapshotOwner: []string{
                            "sunt",
                            "animi",
                        },
                    },
                    Type: "MANAGED_CWE",
                },
                Parameters: &shared.Parameters{
                    ExcludeBootVolume: false,
                    NoReboot: true,
                },
                PolicyType: "EBS_SNAPSHOT_MANAGEMENT",
                ResourceLocations: []shared.ResourceLocationValuesEnum{
                    "OUTPOST",
                    "OUTPOST",
                    "OUTPOST",
                },
                ResourceTypes: []shared.ResourceTypeValuesEnum{
                    "INSTANCE",
                },
                Schedules: []shared.Schedule{
                    shared.Schedule{
                        CopyTags: true,
                        CreateRule: &shared.CreateRule{
                            CronExpression: "nemo",
                            Interval: 339904168827147199,
                            IntervalUnit: "HOURS",
                            Location: "OUTPOST_LOCAL",
                            Times: []string{
                                "soluta",
                                "enim",
                            },
                        },
                        CrossRegionCopyRules: []shared.CrossRegionCopyRule{
                            shared.CrossRegionCopyRule{
                                CmkArn: "quia",
                                CopyTags: false,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 4899267286538832296,
                                    IntervalUnit: "WEEKS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 2134753628428172799,
                                    IntervalUnit: "WEEKS",
                                },
                                Target: "adipisci",
                                TargetRegion: "qui",
                            },
                            shared.CrossRegionCopyRule{
                                CmkArn: "iste",
                                CopyTags: true,
                                DeprecateRule: &shared.CrossRegionCopyDeprecateRule{
                                    Interval: 3655015297049830863,
                                    IntervalUnit: "WEEKS",
                                },
                                Encrypted: false,
                                RetainRule: &shared.CrossRegionCopyRetainRule{
                                    Interval: 2492105853915103689,
                                    IntervalUnit: "MONTHS",
                                },
                                Target: "dolores",
                                TargetRegion: "molestias",
                            },
                        },
                        DeprecateRule: &shared.DeprecateRule{
                            Count: 3173788743379359755,
                            Interval: 5360372200248054638,
                            IntervalUnit: "YEARS",
                        },
                        FastRestoreRule: &shared.FastRestoreRule{
                            AvailabilityZones: []string{
                                "ullam",
                                "corrupti",
                            },
                            Count: 6840482267185682142,
                            Interval: 6532707090448363858,
                            IntervalUnit: "YEARS",
                        },
                        Name: "magnam",
                        RetainRule: &shared.RetainRule{
                            Count: 2074335382148546383,
                            Interval: 4970678582028186613,
                            IntervalUnit: "DAYS",
                        },
                        ShareRules: []shared.ShareRule{
                            shared.ShareRule{
                                TargetAccounts: []string{
                                    "vel",
                                    "veniam",
                                },
                                UnshareInterval: 2856735946593628957,
                                UnshareIntervalUnit: "WEEKS",
                            },
                        },
                        TagsToAdd: []shared.Tag{
                            shared.Tag{
                                Key: "cumque",
                                Value: "ipsam",
                            },
                            shared.Tag{
                                Key: "consequatur",
                                Value: "a",
                            },
                            shared.Tag{
                                Key: "ullam",
                                Value: "dolor",
                            },
                        },
                        VariableTags: []shared.Tag{
                            shared.Tag{
                                Key: "ducimus",
                                Value: "in",
                            },
                            shared.Tag{
                                Key: "enim",
                                Value: "iusto",
                            },
                        },
                    },
                },
                TargetTags: []shared.Tag{
                    shared.Tag{
                        Key: "deleniti",
                        Value: "consectetur",
                    },
                    shared.Tag{
                        Key: "dolores",
                        Value: "voluptate",
                    },
                },
            },
            State: "ENABLED",
            Tags: map[string]string{
                "reiciendis": "aut",
                "unde": "saepe",
                "ratione": "autem",
            },
        },
    }
    
    res, err := s.Sdk.CreateLifecyclePolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLifecyclePolicyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateLifecyclePolicy` - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* `DeleteLifecyclePolicy` - Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
* `GetLifecyclePolicies` - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* `GetLifecyclePolicy` - Gets detailed information about the specified lifecycle policy.
* `ListTagsForResource` - Lists the tags for the specified resource.
* `TagResource` - Adds the specified tags to the specified resource.
* `UntagResource` - Removes the specified tags from the specified resource.
* `UpdateLifecyclePolicy` - Updates the specified lifecycle policy.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
