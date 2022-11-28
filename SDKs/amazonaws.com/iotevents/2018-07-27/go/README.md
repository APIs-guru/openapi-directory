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
    
    req := operations.CreateAlarmModelRequest{
        Headers: operations.CreateAlarmModelHeaders{
            XAmzAlgorithm: "earum",
            XAmzContentSha256: "eum",
            XAmzCredential: "impedit",
            XAmzDate: "est",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "facilis",
            XAmzSignedHeaders: "ut",
        },
        Request: operations.CreateAlarmModelRequestBody{
            AlarmCapabilities: &operations.CreateAlarmModelRequestBodyAlarmCapabilities{
                AcknowledgeFlow: &shared.AcknowledgeFlow{
                    Enabled: false,
                },
                InitializationConfiguration: &shared.InitializationConfiguration{
                    DisabledOnInitialization: false,
                },
            },
            AlarmEventActions: &operations.CreateAlarmModelRequestBodyAlarmEventActions{
                AlarmActions: []shared.AlarmAction{
                    shared.AlarmAction{
                        DynamoDb: &shared.DynamoDbAction{
                            HashKeyField: "cupiditate",
                            HashKeyType: "minus",
                            HashKeyValue: "in",
                            Operation: "debitis",
                            Payload: &shared.Payload{
                                ContentExpression: "est",
                                Type: "STRING",
                            },
                            PayloadField: "distinctio",
                            RangeKeyField: "hic",
                            RangeKeyType: "mollitia",
                            RangeKeyValue: "qui",
                            TableName: "rerum",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "labore",
                                Type: "STRING",
                            },
                            TableName: "eum",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "laborum",
                            Payload: &shared.Payload{
                                ContentExpression: "maxime",
                                Type: "STRING",
                            },
                            Separator: "aut",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "qui",
                            Payload: &shared.Payload{
                                ContentExpression: "facere",
                                Type: "JSON",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "qui",
                            EntryID: "velit",
                            PropertyAlias: "explicabo",
                            PropertyID: "qui",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "maiores",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "debitis",
                                    TimeInSeconds: "molestiae",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "voluptas",
                                    DoubleValue: "officia",
                                    IntegerValue: "cupiditate",
                                    StringValue: "in",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "molestiae",
                            Payload: &shared.Payload{
                                ContentExpression: "ipsa",
                                Type: "STRING",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "reiciendis",
                            Payload: &shared.Payload{
                                ContentExpression: "quae",
                                Type: "STRING",
                            },
                        },
                        Sns: &shared.SnsTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "expedita",
                                Type: "STRING",
                            },
                            TargetArn: "occaecati",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "voluptate",
                                Type: "JSON",
                            },
                            QueueURL: "harum",
                            UseBase64: true,
                        },
                    },
                    shared.AlarmAction{
                        DynamoDb: &shared.DynamoDbAction{
                            HashKeyField: "commodi",
                            HashKeyType: "corrupti",
                            HashKeyValue: "quasi",
                            Operation: "consectetur",
                            Payload: &shared.Payload{
                                ContentExpression: "praesentium",
                                Type: "STRING",
                            },
                            PayloadField: "modi",
                            RangeKeyField: "doloribus",
                            RangeKeyType: "dolorem",
                            RangeKeyValue: "quis",
                            TableName: "vel",
                        },
                        DynamoDBv2: &shared.DynamoDBv2Action{
                            Payload: &shared.Payload{
                                ContentExpression: "magni",
                                Type: "STRING",
                            },
                            TableName: "est",
                        },
                        Firehose: &shared.FirehoseAction{
                            DeliveryStreamName: "consectetur",
                            Payload: &shared.Payload{
                                ContentExpression: "dolores",
                                Type: "JSON",
                            },
                            Separator: "aperiam",
                        },
                        IotEvents: &shared.IotEventsAction{
                            InputName: "possimus",
                            Payload: &shared.Payload{
                                ContentExpression: "rerum",
                                Type: "JSON",
                            },
                        },
                        IotSiteWise: &shared.IotSiteWiseAction{
                            AssetID: "nesciunt",
                            EntryID: "ut",
                            PropertyAlias: "optio",
                            PropertyID: "ut",
                            PropertyValue: &shared.AssetPropertyValue{
                                Quality: "velit",
                                Timestamp: &shared.AssetPropertyTimestamp{
                                    OffsetInNanos: "velit",
                                    TimeInSeconds: "totam",
                                },
                                Value: &shared.AssetPropertyVariant{
                                    BooleanValue: "doloribus",
                                    DoubleValue: "praesentium",
                                    IntegerValue: "et",
                                    StringValue: "voluptatem",
                                },
                            },
                        },
                        IotTopicPublish: &shared.IotTopicPublishAction{
                            MqttTopic: "quae",
                            Payload: &shared.Payload{
                                ContentExpression: "soluta",
                                Type: "STRING",
                            },
                        },
                        Lambda: &shared.LambdaAction{
                            FunctionArn: "at",
                            Payload: &shared.Payload{
                                ContentExpression: "nostrum",
                                Type: "STRING",
                            },
                        },
                        Sns: &shared.SnsTopicPublishAction{
                            Payload: &shared.Payload{
                                ContentExpression: "iste",
                                Type: "JSON",
                            },
                            TargetArn: "qui",
                        },
                        Sqs: &shared.SqsAction{
                            Payload: &shared.Payload{
                                ContentExpression: "fugit",
                                Type: "JSON",
                            },
                            QueueURL: "non",
                            UseBase64: true,
                        },
                    },
                },
            },
            AlarmModelDescription: "omnis",
            AlarmModelName: "magni",
            AlarmNotification: &operations.CreateAlarmModelRequestBodyAlarmNotification{
                NotificationActions: []shared.NotificationAction{
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "corporis",
                                Payload: &shared.Payload{
                                    ContentExpression: "cupiditate",
                                    Type: "STRING",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "maiores",
                                    Subject: "corrupti",
                                },
                                From: "expedita",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "quibusdam",
                                                UserID: "magni",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "quia",
                                                UserID: "earum",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SmsConfiguration{
                            shared.SmsConfiguration{
                                AdditionalMessage: "alias",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "rerum",
                                            UserID: "maxime",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "qui",
                                            UserID: "omnis",
                                        },
                                    },
                                },
                                SenderID: "eos",
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "iusto",
                                Payload: &shared.Payload{
                                    ContentExpression: "recusandae",
                                    Type: "JSON",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "veniam",
                                    Subject: "aspernatur",
                                },
                                From: "sed",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "numquam",
                                                UserID: "explicabo",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "et",
                                                UserID: "nulla",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "nulla",
                                    Subject: "amet",
                                },
                                From: "error",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "odit",
                                                UserID: "exercitationem",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "hic",
                                    Subject: "perferendis",
                                },
                                From: "cupiditate",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "hic",
                                                UserID: "eveniet",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "qui",
                                                UserID: "qui",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "eius",
                                                UserID: "voluptas",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SmsConfiguration{
                            shared.SmsConfiguration{
                                AdditionalMessage: "aut",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "aliquid",
                                            UserID: "natus",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "voluptate",
                                            UserID: "consectetur",
                                        },
                                    },
                                },
                                SenderID: "tempore",
                            },
                            shared.SmsConfiguration{
                                AdditionalMessage: "voluptate",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "velit",
                                            UserID: "maiores",
                                        },
                                    },
                                },
                                SenderID: "sunt",
                            },
                            shared.SmsConfiguration{
                                AdditionalMessage: "et",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "reprehenderit",
                                            UserID: "totam",
                                        },
                                    },
                                },
                                SenderID: "libero",
                            },
                        },
                    },
                    shared.NotificationAction{
                        Action: shared.NotificationTargetActions{
                            LambdaAction: &shared.LambdaAction{
                                FunctionArn: "voluptas",
                                Payload: &shared.Payload{
                                    ContentExpression: "illo",
                                    Type: "JSON",
                                },
                            },
                        },
                        EmailConfigurations: []shared.EmailConfiguration{
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "aliquid",
                                    Subject: "et",
                                },
                                From: "nisi",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "vitae",
                                                UserID: "quos",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "et",
                                                UserID: "perspiciatis",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "quo",
                                                UserID: "nulla",
                                            },
                                        },
                                    },
                                },
                            },
                            shared.EmailConfiguration{
                                Content: &shared.EmailContent{
                                    AdditionalMessage: "modi",
                                    Subject: "est",
                                },
                                From: "impedit",
                                Recipients: shared.EmailRecipients{
                                    To: []shared.RecipientDetail{
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "qui",
                                                UserID: "ut",
                                            },
                                        },
                                        shared.RecipientDetail{
                                            SsoIdentity: &shared.SsoIdentity{
                                                IdentityStoreID: "possimus",
                                                UserID: "sunt",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        SmsConfigurations: []shared.SmsConfiguration{
                            shared.SmsConfiguration{
                                AdditionalMessage: "nihil",
                                Recipients: []shared.RecipientDetail{
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "a",
                                            UserID: "totam",
                                        },
                                    },
                                    shared.RecipientDetail{
                                        SsoIdentity: &shared.SsoIdentity{
                                            IdentityStoreID: "at",
                                            UserID: "aliquam",
                                        },
                                    },
                                },
                                SenderID: "incidunt",
                            },
                        },
                    },
                },
            },
            AlarmRule: operations.CreateAlarmModelRequestBodyAlarmRule{
                SimpleRule: &shared.SimpleRule{
                    ComparisonOperator: "LESS_OR_EQUAL",
                    InputProperty: "esse",
                    Threshold: "consectetur",
                },
            },
            Key: "cumque",
            RoleArn: "fugit",
            Severity: 2159020854884377768,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "neque",
                    Value: "incidunt",
                },
                shared.Tag{
                    Key: "et",
                    Value: "neque",
                },
            },
        },
    }
    
    res, err := s.Sdk.CreateAlarmModel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAlarmModelResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateAlarmModel` - Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `CreateDetectorModel` - Creates a detector model.
* `CreateInput` - Creates an input.
* `DeleteAlarmModel` - Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
* `DeleteDetectorModel` - Deletes a detector model. Any active instances of the detector model are also deleted.
* `DeleteInput` - Deletes an input.
* `DescribeAlarmModel` - Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
* `DescribeDetectorModel` - Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
* `DescribeDetectorModelAnalysis` - <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `DescribeInput` - Describes an input.
* `DescribeLoggingOptions` - Retrieves the current settings of the AWS IoT Events logging options.
* `GetDetectorModelAnalysisResults` - <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `ListAlarmModelVersions` - Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
* `ListAlarmModels` - Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
* `ListDetectorModelVersions` - Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
* `ListDetectorModels` - Lists the detector models you have created. Only the metadata associated with each detector model is returned.
* `ListInputRoutings` -  Lists one or more input routings. 
* `ListInputs` - Lists the inputs you have created.
* `ListTagsForResource` - Lists the tags (metadata) you have assigned to the resource.
* `PutLoggingOptions` - <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
* `StartDetectorModelAnalysis` - Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `TagResource` - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* `UntagResource` - Removes the given tags (metadata) from the resource.
* `UpdateAlarmModel` - Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
* `UpdateDetectorModel` - Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
* `UpdateInput` - Updates an input.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
