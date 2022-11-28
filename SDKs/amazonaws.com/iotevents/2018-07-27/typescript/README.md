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
import { CreateAlarmModelRequest, CreateAlarmModelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateAlarmModelRequest = {
  headers: {
    xAmzAlgorithm: "earum",
    xAmzContentSha256: "eum",
    xAmzCredential: "impedit",
    xAmzDate: "est",
    xAmzSecurityToken: "dolor",
    xAmzSignature: "facilis",
    xAmzSignedHeaders: "ut",
  },
  request: {
    alarmCapabilities: {
      acknowledgeFlow: {
        enabled: false,
      },
      initializationConfiguration: {
        disabledOnInitialization: false,
      },
    },
    alarmEventActions: {
      alarmActions: [
        {
          dynamoDb: {
            hashKeyField: "cupiditate",
            hashKeyType: "minus",
            hashKeyValue: "in",
            operation: "debitis",
            payload: {
              contentExpression: "est",
              type: "STRING",
            },
            payloadField: "distinctio",
            rangeKeyField: "hic",
            rangeKeyType: "mollitia",
            rangeKeyValue: "qui",
            tableName: "rerum",
          },
          dynamoDBv2: {
            payload: {
              contentExpression: "labore",
              type: "STRING",
            },
            tableName: "eum",
          },
          firehose: {
            deliveryStreamName: "laborum",
            payload: {
              contentExpression: "maxime",
              type: "STRING",
            },
            separator: "aut",
          },
          iotEvents: {
            inputName: "qui",
            payload: {
              contentExpression: "facere",
              type: "JSON",
            },
          },
          iotSiteWise: {
            assetId: "qui",
            entryId: "velit",
            propertyAlias: "explicabo",
            propertyId: "qui",
            propertyValue: {
              quality: "maiores",
              timestamp: {
                offsetInNanos: "debitis",
                timeInSeconds: "molestiae",
              },
              value: {
                booleanValue: "voluptas",
                doubleValue: "officia",
                integerValue: "cupiditate",
                stringValue: "in",
              },
            },
          },
          iotTopicPublish: {
            mqttTopic: "molestiae",
            payload: {
              contentExpression: "ipsa",
              type: "STRING",
            },
          },
          lambda: {
            functionArn: "reiciendis",
            payload: {
              contentExpression: "quae",
              type: "STRING",
            },
          },
          sns: {
            payload: {
              contentExpression: "expedita",
              type: "STRING",
            },
            targetArn: "occaecati",
          },
          sqs: {
            payload: {
              contentExpression: "voluptate",
              type: "JSON",
            },
            queueUrl: "harum",
            useBase64: true,
          },
        },
        {
          dynamoDb: {
            hashKeyField: "commodi",
            hashKeyType: "corrupti",
            hashKeyValue: "quasi",
            operation: "consectetur",
            payload: {
              contentExpression: "praesentium",
              type: "STRING",
            },
            payloadField: "modi",
            rangeKeyField: "doloribus",
            rangeKeyType: "dolorem",
            rangeKeyValue: "quis",
            tableName: "vel",
          },
          dynamoDBv2: {
            payload: {
              contentExpression: "magni",
              type: "STRING",
            },
            tableName: "est",
          },
          firehose: {
            deliveryStreamName: "consectetur",
            payload: {
              contentExpression: "dolores",
              type: "JSON",
            },
            separator: "aperiam",
          },
          iotEvents: {
            inputName: "possimus",
            payload: {
              contentExpression: "rerum",
              type: "JSON",
            },
          },
          iotSiteWise: {
            assetId: "nesciunt",
            entryId: "ut",
            propertyAlias: "optio",
            propertyId: "ut",
            propertyValue: {
              quality: "velit",
              timestamp: {
                offsetInNanos: "velit",
                timeInSeconds: "totam",
              },
              value: {
                booleanValue: "doloribus",
                doubleValue: "praesentium",
                integerValue: "et",
                stringValue: "voluptatem",
              },
            },
          },
          iotTopicPublish: {
            mqttTopic: "quae",
            payload: {
              contentExpression: "soluta",
              type: "STRING",
            },
          },
          lambda: {
            functionArn: "at",
            payload: {
              contentExpression: "nostrum",
              type: "STRING",
            },
          },
          sns: {
            payload: {
              contentExpression: "iste",
              type: "JSON",
            },
            targetArn: "qui",
          },
          sqs: {
            payload: {
              contentExpression: "fugit",
              type: "JSON",
            },
            queueUrl: "non",
            useBase64: true,
          },
        },
      ],
    },
    alarmModelDescription: "omnis",
    alarmModelName: "magni",
    alarmNotification: {
      notificationActions: [
        {
          action: {
            lambdaAction: {
              functionArn: "corporis",
              payload: {
                contentExpression: "cupiditate",
                type: "STRING",
              },
            },
          },
          emailConfigurations: [
            {
              content: {
                additionalMessage: "maiores",
                subject: "corrupti",
              },
              from: "expedita",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "quibusdam",
                      userId: "magni",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "quia",
                      userId: "earum",
                    },
                  },
                ],
              },
            },
          ],
          smsConfigurations: [
            {
              additionalMessage: "alias",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "rerum",
                    userId: "maxime",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "qui",
                    userId: "omnis",
                  },
                },
              ],
              senderId: "eos",
            },
          ],
        },
        {
          action: {
            lambdaAction: {
              functionArn: "iusto",
              payload: {
                contentExpression: "recusandae",
                type: "JSON",
              },
            },
          },
          emailConfigurations: [
            {
              content: {
                additionalMessage: "veniam",
                subject: "aspernatur",
              },
              from: "sed",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "numquam",
                      userId: "explicabo",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "et",
                      userId: "nulla",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "nulla",
                subject: "amet",
              },
              from: "error",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "odit",
                      userId: "exercitationem",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "hic",
                subject: "perferendis",
              },
              from: "cupiditate",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "hic",
                      userId: "eveniet",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "qui",
                      userId: "qui",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "eius",
                      userId: "voluptas",
                    },
                  },
                ],
              },
            },
          ],
          smsConfigurations: [
            {
              additionalMessage: "aut",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "aliquid",
                    userId: "natus",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "voluptate",
                    userId: "consectetur",
                  },
                },
              ],
              senderId: "tempore",
            },
            {
              additionalMessage: "voluptate",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "velit",
                    userId: "maiores",
                  },
                },
              ],
              senderId: "sunt",
            },
            {
              additionalMessage: "et",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "reprehenderit",
                    userId: "totam",
                  },
                },
              ],
              senderId: "libero",
            },
          ],
        },
        {
          action: {
            lambdaAction: {
              functionArn: "voluptas",
              payload: {
                contentExpression: "illo",
                type: "JSON",
              },
            },
          },
          emailConfigurations: [
            {
              content: {
                additionalMessage: "aliquid",
                subject: "et",
              },
              from: "nisi",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "vitae",
                      userId: "quos",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "et",
                      userId: "perspiciatis",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "quo",
                      userId: "nulla",
                    },
                  },
                ],
              },
            },
            {
              content: {
                additionalMessage: "modi",
                subject: "est",
              },
              from: "impedit",
              recipients: {
                to: [
                  {
                    ssoIdentity: {
                      identityStoreId: "qui",
                      userId: "ut",
                    },
                  },
                  {
                    ssoIdentity: {
                      identityStoreId: "possimus",
                      userId: "sunt",
                    },
                  },
                ],
              },
            },
          ],
          smsConfigurations: [
            {
              additionalMessage: "nihil",
              recipients: [
                {
                  ssoIdentity: {
                    identityStoreId: "a",
                    userId: "totam",
                  },
                },
                {
                  ssoIdentity: {
                    identityStoreId: "at",
                    userId: "aliquam",
                  },
                },
              ],
              senderId: "incidunt",
            },
          ],
        },
      ],
    },
    alarmRule: {
      simpleRule: {
        comparisonOperator: "LESS_OR_EQUAL",
        inputProperty: "esse",
        threshold: "consectetur",
      },
    },
    key: "cumque",
    roleArn: "fugit",
    severity: 2159020854884377768,
    tags: [
      {
        key: "neque",
        value: "incidunt",
      },
      {
        key: "et",
        value: "neque",
      },
    ],
  },
};

sdk.sdk.createAlarmModel(req).then((res: CreateAlarmModelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createAlarmModel` - Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `createDetectorModel` - Creates a detector model.
* `createInput` - Creates an input.
* `deleteAlarmModel` - Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
* `deleteDetectorModel` - Deletes a detector model. Any active instances of the detector model are also deleted.
* `deleteInput` - Deletes an input.
* `describeAlarmModel` - Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
* `describeDetectorModel` - Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
* `describeDetectorModelAnalysis` - <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `describeInput` - Describes an input.
* `describeLoggingOptions` - Retrieves the current settings of the AWS IoT Events logging options.
* `getDetectorModelAnalysisResults` - <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `listAlarmModelVersions` - Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
* `listAlarmModels` - Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
* `listDetectorModelVersions` - Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
* `listDetectorModels` - Lists the detector models you have created. Only the metadata associated with each detector model is returned.
* `listInputRoutings` -  Lists one or more input routings. 
* `listInputs` - Lists the inputs you have created.
* `listTagsForResource` - Lists the tags (metadata) you have assigned to the resource.
* `putLoggingOptions` - <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
* `startDetectorModelAnalysis` - Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `tagResource` - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* `untagResource` - Removes the given tags (metadata) from the resource.
* `updateAlarmModel` - Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
* `updateDetectorModel` - Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
* `updateInput` - Updates an input.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
