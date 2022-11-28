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
    
req = operations.CreateLifecyclePolicyRequest(
    headers=operations.CreateLifecyclePolicyHeaders(
        x_amz_algorithm="dolores",
        x_amz_content_sha256="magni",
        x_amz_credential="inventore",
        x_amz_date="qui",
        x_amz_security_token="ab",
        x_amz_signature="accusantium",
        x_amz_signed_headers="aliquam",
    ),
    request=operations.CreateLifecyclePolicyRequestBody(
        description="rem",
        execution_role_arn="et",
        policy_details=operations.CreateLifecyclePolicyRequestBodyPolicyDetails(
            actions=[
                shared.Action(
                    cross_region_copy=[
                        shared.CrossRegionCopyAction(
                            encryption_configuration=shared.EncryptionConfiguration(
                                cmk_arn="odit",
                                encrypted=False,
                            ),
                            retain_rule=shared.CrossRegionCopyRetainRule(
                                interval=3380463478881091391,
                                interval_unit="YEARS",
                            ),
                            target="at",
                        ),
                    ],
                    name="consequuntur",
                ),
            ],
            event_source=shared.EventSource(
                parameters=shared.EventParameters(
                    description_regex="libero",
                    event_type="shareSnapshot",
                    snapshot_owner=[
                        "sunt",
                        "animi",
                    ],
                ),
                type="MANAGED_CWE",
            ),
            parameters=shared.Parameters(
                exclude_boot_volume=False,
                no_reboot=True,
            ),
            policy_type="EBS_SNAPSHOT_MANAGEMENT",
            resource_locations=[
                "OUTPOST",
                "OUTPOST",
                "OUTPOST",
            ],
            resource_types=[
                "INSTANCE",
            ],
            schedules=[
                shared.Schedule(
                    copy_tags=True,
                    create_rule=shared.CreateRule(
                        cron_expression="nemo",
                        interval=339904168827147199,
                        interval_unit="HOURS",
                        location="OUTPOST_LOCAL",
                        times=[
                            "soluta",
                            "enim",
                        ],
                    ),
                    cross_region_copy_rules=[
                        shared.CrossRegionCopyRule(
                            cmk_arn="quia",
                            copy_tags=False,
                            deprecate_rule=shared.CrossRegionCopyDeprecateRule(
                                interval=4899267286538832296,
                                interval_unit="WEEKS",
                            ),
                            encrypted=False,
                            retain_rule=shared.CrossRegionCopyRetainRule(
                                interval=2134753628428172799,
                                interval_unit="WEEKS",
                            ),
                            target="adipisci",
                            target_region="qui",
                        ),
                        shared.CrossRegionCopyRule(
                            cmk_arn="iste",
                            copy_tags=True,
                            deprecate_rule=shared.CrossRegionCopyDeprecateRule(
                                interval=3655015297049830863,
                                interval_unit="WEEKS",
                            ),
                            encrypted=False,
                            retain_rule=shared.CrossRegionCopyRetainRule(
                                interval=2492105853915103689,
                                interval_unit="MONTHS",
                            ),
                            target="dolores",
                            target_region="molestias",
                        ),
                    ],
                    deprecate_rule=shared.DeprecateRule(
                        count=3173788743379359755,
                        interval=5360372200248054638,
                        interval_unit="YEARS",
                    ),
                    fast_restore_rule=shared.FastRestoreRule(
                        availability_zones=[
                            "ullam",
                            "corrupti",
                        ],
                        count=6840482267185682142,
                        interval=6532707090448363858,
                        interval_unit="YEARS",
                    ),
                    name="magnam",
                    retain_rule=shared.RetainRule(
                        count=2074335382148546383,
                        interval=4970678582028186613,
                        interval_unit="DAYS",
                    ),
                    share_rules=[
                        shared.ShareRule(
                            target_accounts=[
                                "vel",
                                "veniam",
                            ],
                            unshare_interval=2856735946593628957,
                            unshare_interval_unit="WEEKS",
                        ),
                    ],
                    tags_to_add=[
                        shared.Tag(
                            key="cumque",
                            value="ipsam",
                        ),
                        shared.Tag(
                            key="consequatur",
                            value="a",
                        ),
                        shared.Tag(
                            key="ullam",
                            value="dolor",
                        ),
                    ],
                    variable_tags=[
                        shared.Tag(
                            key="ducimus",
                            value="in",
                        ),
                        shared.Tag(
                            key="enim",
                            value="iusto",
                        ),
                    ],
                ),
            ],
            target_tags=[
                shared.Tag(
                    key="deleniti",
                    value="consectetur",
                ),
                shared.Tag(
                    key="dolores",
                    value="voluptate",
                ),
            ],
        ),
        state="ENABLED",
        tags={
            "reiciendis": "aut",
            "unde": "saepe",
            "ratione": "autem",
        },
    ),
)
    
res = s.sdk.create_lifecycle_policy(req)

if res.create_lifecycle_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_lifecycle_policy` - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
* `delete_lifecycle_policy` - Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
* `get_lifecycle_policies` - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
* `get_lifecycle_policy` - Gets detailed information about the specified lifecycle policy.
* `list_tags_for_resource` - Lists the tags for the specified resource.
* `tag_resource` - Adds the specified tags to the specified resource.
* `untag_resource` - Removes the specified tags from the specified resource.
* `update_lifecycle_policy` - Updates the specified lifecycle policy.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
