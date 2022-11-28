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
    
req = operations.CreateAlarmModelRequest(
    headers=operations.CreateAlarmModelHeaders(
        x_amz_algorithm="earum",
        x_amz_content_sha256="eum",
        x_amz_credential="impedit",
        x_amz_date="est",
        x_amz_security_token="dolor",
        x_amz_signature="facilis",
        x_amz_signed_headers="ut",
    ),
    request=operations.CreateAlarmModelRequestBody(
        alarm_capabilities=operations.CreateAlarmModelRequestBodyAlarmCapabilities(
            acknowledge_flow=shared.AcknowledgeFlow(
                enabled=False,
            ),
            initialization_configuration=shared.InitializationConfiguration(
                disabled_on_initialization=False,
            ),
        ),
        alarm_event_actions=operations.CreateAlarmModelRequestBodyAlarmEventActions(
            alarm_actions=[
                shared.AlarmAction(
                    dynamo_db=shared.DynamoDbAction(
                        hash_key_field="cupiditate",
                        hash_key_type="minus",
                        hash_key_value="in",
                        operation="debitis",
                        payload=shared.Payload(
                            content_expression="est",
                            type="STRING",
                        ),
                        payload_field="distinctio",
                        range_key_field="hic",
                        range_key_type="mollitia",
                        range_key_value="qui",
                        table_name="rerum",
                    ),
                    dynamo_d_bv2=shared.DynamoDBv2Action(
                        payload=shared.Payload(
                            content_expression="labore",
                            type="STRING",
                        ),
                        table_name="eum",
                    ),
                    firehose=shared.FirehoseAction(
                        delivery_stream_name="laborum",
                        payload=shared.Payload(
                            content_expression="maxime",
                            type="STRING",
                        ),
                        separator="aut",
                    ),
                    iot_events=shared.IotEventsAction(
                        input_name="qui",
                        payload=shared.Payload(
                            content_expression="facere",
                            type="JSON",
                        ),
                    ),
                    iot_site_wise=shared.IotSiteWiseAction(
                        asset_id="qui",
                        entry_id="velit",
                        property_alias="explicabo",
                        property_id="qui",
                        property_value=shared.AssetPropertyValue(
                            quality="maiores",
                            timestamp=shared.AssetPropertyTimestamp(
                                offset_in_nanos="debitis",
                                time_in_seconds="molestiae",
                            ),
                            value=shared.AssetPropertyVariant(
                                boolean_value="voluptas",
                                double_value="officia",
                                integer_value="cupiditate",
                                string_value="in",
                            ),
                        ),
                    ),
                    iot_topic_publish=shared.IotTopicPublishAction(
                        mqtt_topic="molestiae",
                        payload=shared.Payload(
                            content_expression="ipsa",
                            type="STRING",
                        ),
                    ),
                    lambda_=shared.LambdaAction(
                        function_arn="reiciendis",
                        payload=shared.Payload(
                            content_expression="quae",
                            type="STRING",
                        ),
                    ),
                    sns=shared.SnsTopicPublishAction(
                        payload=shared.Payload(
                            content_expression="expedita",
                            type="STRING",
                        ),
                        target_arn="occaecati",
                    ),
                    sqs=shared.SqsAction(
                        payload=shared.Payload(
                            content_expression="voluptate",
                            type="JSON",
                        ),
                        queue_url="harum",
                        use_base64=True,
                    ),
                ),
                shared.AlarmAction(
                    dynamo_db=shared.DynamoDbAction(
                        hash_key_field="commodi",
                        hash_key_type="corrupti",
                        hash_key_value="quasi",
                        operation="consectetur",
                        payload=shared.Payload(
                            content_expression="praesentium",
                            type="STRING",
                        ),
                        payload_field="modi",
                        range_key_field="doloribus",
                        range_key_type="dolorem",
                        range_key_value="quis",
                        table_name="vel",
                    ),
                    dynamo_d_bv2=shared.DynamoDBv2Action(
                        payload=shared.Payload(
                            content_expression="magni",
                            type="STRING",
                        ),
                        table_name="est",
                    ),
                    firehose=shared.FirehoseAction(
                        delivery_stream_name="consectetur",
                        payload=shared.Payload(
                            content_expression="dolores",
                            type="JSON",
                        ),
                        separator="aperiam",
                    ),
                    iot_events=shared.IotEventsAction(
                        input_name="possimus",
                        payload=shared.Payload(
                            content_expression="rerum",
                            type="JSON",
                        ),
                    ),
                    iot_site_wise=shared.IotSiteWiseAction(
                        asset_id="nesciunt",
                        entry_id="ut",
                        property_alias="optio",
                        property_id="ut",
                        property_value=shared.AssetPropertyValue(
                            quality="velit",
                            timestamp=shared.AssetPropertyTimestamp(
                                offset_in_nanos="velit",
                                time_in_seconds="totam",
                            ),
                            value=shared.AssetPropertyVariant(
                                boolean_value="doloribus",
                                double_value="praesentium",
                                integer_value="et",
                                string_value="voluptatem",
                            ),
                        ),
                    ),
                    iot_topic_publish=shared.IotTopicPublishAction(
                        mqtt_topic="quae",
                        payload=shared.Payload(
                            content_expression="soluta",
                            type="STRING",
                        ),
                    ),
                    lambda_=shared.LambdaAction(
                        function_arn="at",
                        payload=shared.Payload(
                            content_expression="nostrum",
                            type="STRING",
                        ),
                    ),
                    sns=shared.SnsTopicPublishAction(
                        payload=shared.Payload(
                            content_expression="iste",
                            type="JSON",
                        ),
                        target_arn="qui",
                    ),
                    sqs=shared.SqsAction(
                        payload=shared.Payload(
                            content_expression="fugit",
                            type="JSON",
                        ),
                        queue_url="non",
                        use_base64=True,
                    ),
                ),
            ],
        ),
        alarm_model_description="omnis",
        alarm_model_name="magni",
        alarm_notification=operations.CreateAlarmModelRequestBodyAlarmNotification(
            notification_actions=[
                shared.NotificationAction(
                    action=shared.NotificationTargetActions(
                        lambda_action=shared.LambdaAction(
                            function_arn="corporis",
                            payload=shared.Payload(
                                content_expression="cupiditate",
                                type="STRING",
                            ),
                        ),
                    ),
                    email_configurations=[
                        shared.EmailConfiguration(
                            content=shared.EmailContent(
                                additional_message="maiores",
                                subject="corrupti",
                            ),
                            from_="expedita",
                            recipients=shared.EmailRecipients(
                                to=[
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="quibusdam",
                                            user_id="magni",
                                        ),
                                    ),
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="quia",
                                            user_id="earum",
                                        ),
                                    ),
                                ],
                            ),
                        ),
                    ],
                    sms_configurations=[
                        shared.SmsConfiguration(
                            additional_message="alias",
                            recipients=[
                                shared.RecipientDetail(
                                    sso_identity=shared.SsoIdentity(
                                        identity_store_id="rerum",
                                        user_id="maxime",
                                    ),
                                ),
                                shared.RecipientDetail(
                                    sso_identity=shared.SsoIdentity(
                                        identity_store_id="qui",
                                        user_id="omnis",
                                    ),
                                ),
                            ],
                            sender_id="eos",
                        ),
                    ],
                ),
                shared.NotificationAction(
                    action=shared.NotificationTargetActions(
                        lambda_action=shared.LambdaAction(
                            function_arn="iusto",
                            payload=shared.Payload(
                                content_expression="recusandae",
                                type="JSON",
                            ),
                        ),
                    ),
                    email_configurations=[
                        shared.EmailConfiguration(
                            content=shared.EmailContent(
                                additional_message="veniam",
                                subject="aspernatur",
                            ),
                            from_="sed",
                            recipients=shared.EmailRecipients(
                                to=[
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="numquam",
                                            user_id="explicabo",
                                        ),
                                    ),
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="et",
                                            user_id="nulla",
                                        ),
                                    ),
                                ],
                            ),
                        ),
                        shared.EmailConfiguration(
                            content=shared.EmailContent(
                                additional_message="nulla",
                                subject="amet",
                            ),
                            from_="error",
                            recipients=shared.EmailRecipients(
                                to=[
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="odit",
                                            user_id="exercitationem",
                                        ),
                                    ),
                                ],
                            ),
                        ),
                        shared.EmailConfiguration(
                            content=shared.EmailContent(
                                additional_message="hic",
                                subject="perferendis",
                            ),
                            from_="cupiditate",
                            recipients=shared.EmailRecipients(
                                to=[
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="hic",
                                            user_id="eveniet",
                                        ),
                                    ),
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="qui",
                                            user_id="qui",
                                        ),
                                    ),
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="eius",
                                            user_id="voluptas",
                                        ),
                                    ),
                                ],
                            ),
                        ),
                    ],
                    sms_configurations=[
                        shared.SmsConfiguration(
                            additional_message="aut",
                            recipients=[
                                shared.RecipientDetail(
                                    sso_identity=shared.SsoIdentity(
                                        identity_store_id="aliquid",
                                        user_id="natus",
                                    ),
                                ),
                                shared.RecipientDetail(
                                    sso_identity=shared.SsoIdentity(
                                        identity_store_id="voluptate",
                                        user_id="consectetur",
                                    ),
                                ),
                            ],
                            sender_id="tempore",
                        ),
                        shared.SmsConfiguration(
                            additional_message="voluptate",
                            recipients=[
                                shared.RecipientDetail(
                                    sso_identity=shared.SsoIdentity(
                                        identity_store_id="velit",
                                        user_id="maiores",
                                    ),
                                ),
                            ],
                            sender_id="sunt",
                        ),
                        shared.SmsConfiguration(
                            additional_message="et",
                            recipients=[
                                shared.RecipientDetail(
                                    sso_identity=shared.SsoIdentity(
                                        identity_store_id="reprehenderit",
                                        user_id="totam",
                                    ),
                                ),
                            ],
                            sender_id="libero",
                        ),
                    ],
                ),
                shared.NotificationAction(
                    action=shared.NotificationTargetActions(
                        lambda_action=shared.LambdaAction(
                            function_arn="voluptas",
                            payload=shared.Payload(
                                content_expression="illo",
                                type="JSON",
                            ),
                        ),
                    ),
                    email_configurations=[
                        shared.EmailConfiguration(
                            content=shared.EmailContent(
                                additional_message="aliquid",
                                subject="et",
                            ),
                            from_="nisi",
                            recipients=shared.EmailRecipients(
                                to=[
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="vitae",
                                            user_id="quos",
                                        ),
                                    ),
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="et",
                                            user_id="perspiciatis",
                                        ),
                                    ),
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="quo",
                                            user_id="nulla",
                                        ),
                                    ),
                                ],
                            ),
                        ),
                        shared.EmailConfiguration(
                            content=shared.EmailContent(
                                additional_message="modi",
                                subject="est",
                            ),
                            from_="impedit",
                            recipients=shared.EmailRecipients(
                                to=[
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="qui",
                                            user_id="ut",
                                        ),
                                    ),
                                    shared.RecipientDetail(
                                        sso_identity=shared.SsoIdentity(
                                            identity_store_id="possimus",
                                            user_id="sunt",
                                        ),
                                    ),
                                ],
                            ),
                        ),
                    ],
                    sms_configurations=[
                        shared.SmsConfiguration(
                            additional_message="nihil",
                            recipients=[
                                shared.RecipientDetail(
                                    sso_identity=shared.SsoIdentity(
                                        identity_store_id="a",
                                        user_id="totam",
                                    ),
                                ),
                                shared.RecipientDetail(
                                    sso_identity=shared.SsoIdentity(
                                        identity_store_id="at",
                                        user_id="aliquam",
                                    ),
                                ),
                            ],
                            sender_id="incidunt",
                        ),
                    ],
                ),
            ],
        ),
        alarm_rule=operations.CreateAlarmModelRequestBodyAlarmRule(
            simple_rule=shared.SimpleRule(
                comparison_operator="LESS_OR_EQUAL",
                input_property="esse",
                threshold="consectetur",
            ),
        ),
        key="cumque",
        role_arn="fugit",
        severity=2159020854884377768,
        tags=[
            shared.Tag(
                key="neque",
                value="incidunt",
            ),
            shared.Tag(
                key="et",
                value="neque",
            ),
        ],
    ),
)
    
res = s.sdk.create_alarm_model(req)

if res.create_alarm_model_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_alarm_model` - Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `create_detector_model` - Creates a detector model.
* `create_input` - Creates an input.
* `delete_alarm_model` - Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
* `delete_detector_model` - Deletes a detector model. Any active instances of the detector model are also deleted.
* `delete_input` - Deletes an input.
* `describe_alarm_model` - Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
* `describe_detector_model` - Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
* `describe_detector_model_analysis` - <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `describe_input` - Describes an input.
* `describe_logging_options` - Retrieves the current settings of the AWS IoT Events logging options.
* `get_detector_model_analysis_results` - <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* `list_alarm_model_versions` - Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
* `list_alarm_models` - Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
* `list_detector_model_versions` - Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
* `list_detector_models` - Lists the detector models you have created. Only the metadata associated with each detector model is returned.
* `list_input_routings` -  Lists one or more input routings. 
* `list_inputs` - Lists the inputs you have created.
* `list_tags_for_resource` - Lists the tags (metadata) you have assigned to the resource.
* `put_logging_options` - <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
* `start_detector_model_analysis` - Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
* `tag_resource` - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* `untag_resource` - Removes the given tags (metadata) from the resource.
* `update_alarm_model` - Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
* `update_detector_model` - Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
* `update_input` - Updates an input.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
