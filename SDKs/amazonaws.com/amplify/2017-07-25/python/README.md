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
    
req = operations.CreateAppRequest(
    headers=operations.CreateAppHeaders(
        x_amz_algorithm="distinctio",
        x_amz_content_sha256="delectus",
        x_amz_credential="rerum",
        x_amz_date="dolore",
        x_amz_security_token="repellat",
        x_amz_signature="velit",
        x_amz_signed_headers="officia",
    ),
    request=operations.CreateAppRequestBody(
        access_token="modi",
        auto_branch_creation_config=operations.CreateAppRequestBodyAutoBranchCreationConfig(
            basic_auth_credentials="sunt",
            build_spec="voluptas",
            enable_auto_build=False,
            enable_basic_auth=True,
            enable_performance_mode=True,
            enable_pull_request_preview=False,
            environment_variables={
                "autem": "corporis",
            },
            framework="dicta",
            pull_request_environment_name="rem",
            stage="BETA",
        ),
        auto_branch_creation_patterns=[
            "nisi",
        ],
        basic_auth_credentials="recusandae",
        build_spec="qui",
        custom_headers="minus",
        custom_rules=[
            shared.CustomRule(
                condition="rerum",
                source="ut",
                status="rem",
                target="eos",
            ),
            shared.CustomRule(
                condition="et",
                source="reiciendis",
                status="aspernatur",
                target="praesentium",
            ),
            shared.CustomRule(
                condition="porro",
                source="nihil",
                status="adipisci",
                target="consequatur",
            ),
        ],
        description="illum",
        enable_auto_branch_creation=False,
        enable_basic_auth=True,
        enable_branch_auto_build=True,
        enable_branch_auto_deletion=True,
        environment_variables={
            "est": "quo",
            "vero": "alias",
            "totam": "deserunt",
        },
        iam_service_role_arn="eius",
        name="repellat",
        oauth_token="beatae",
        platform="WEB",
        repository="totam",
        tags={
            "et": "magni",
            "necessitatibus": "et",
        },
    ),
)
    
res = s.sdk.create_app(req)

if res.create_app_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_app` -  Creates a new Amplify app. 
* `create_backend_environment` -  Creates a new backend environment for an Amplify app. 
* `create_branch` -  Creates a new branch for an Amplify app. 
* `create_deployment` -  Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 
* `create_domain_association` -  Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 
* `create_webhook` -  Creates a new webhook on an Amplify app. 
* `delete_app` -  Deletes an existing Amplify app specified by an app ID. 
* `delete_backend_environment` -  Deletes a backend environment for an Amplify app. 
* `delete_branch` -  Deletes a branch for an Amplify app. 
* `delete_domain_association` -  Deletes a domain association for an Amplify app. 
* `delete_job` -  Deletes a job for a branch of an Amplify app. 
* `delete_webhook` -  Deletes a webhook. 
* `generate_access_logs` -  Returns the website access logs for a specific time range using a presigned URL. 
* `get_app` -  Returns an existing Amplify app by appID. 
* `get_artifact_url` -  Returns the artifact info that corresponds to an artifact id. 
* `get_backend_environment` -  Returns a backend environment for an Amplify app. 
* `get_branch` -  Returns a branch for an Amplify app. 
* `get_domain_association` -  Returns the domain information for an Amplify app. 
* `get_job` -  Returns a job for a branch of an Amplify app. 
* `get_webhook` -  Returns the webhook information that corresponds to a specified webhook ID. 
* `list_apps` -  Returns a list of the existing Amplify apps. 
* `list_artifacts` -  Returns a list of artifacts for a specified app, branch, and job. 
* `list_backend_environments` -  Lists the backend environments for an Amplify app. 
* `list_branches` -  Lists the branches of an Amplify app. 
* `list_domain_associations` -  Returns the domain associations for an Amplify app. 
* `list_jobs` -  Lists the jobs for a branch of an Amplify app. 
* `list_tags_for_resource` -  Returns a list of tags for a specified Amazon Resource Name (ARN). 
* `list_webhooks` -  Returns a list of webhooks for an Amplify app. 
* `start_deployment` -  Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 
* `start_job` -  Starts a new job for a branch of an Amplify app. 
* `stop_job` -  Stops a job that is in progress for a branch of an Amplify app. 
* `tag_resource` -  Tags the resource with a tag key and value. 
* `untag_resource` -  Untags a resource with a specified Amazon Resource Name (ARN). 
* `update_app` -  Updates an existing Amplify app. 
* `update_branch` -  Updates a branch for an Amplify app. 
* `update_domain_association` -  Creates a new domain association for an Amplify app.
* `update_webhook` -  Updates a webhook. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
