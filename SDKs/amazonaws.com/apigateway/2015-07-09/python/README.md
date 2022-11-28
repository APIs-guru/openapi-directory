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
    
req = operations.CreateAPIKeyRequest(
    headers=operations.CreateAPIKeyHeaders(
        x_amz_algorithm="saepe",
        x_amz_content_sha256="commodi",
        x_amz_credential="in",
        x_amz_date="quibusdam",
        x_amz_security_token="asperiores",
        x_amz_signature="quo",
        x_amz_signed_headers="ea",
    ),
    request=operations.CreateAPIKeyRequestBody(
        customer_id="soluta",
        description="tempora",
        enabled=True,
        generate_distinct_id=True,
        name="facere",
        stage_keys=[
            shared.StageKey(
                rest_api_id="et",
                stage_name="odit",
            ),
            shared.StageKey(
                rest_api_id="est",
                stage_name="id",
            ),
            shared.StageKey(
                rest_api_id="ipsum",
                stage_name="aut",
            ),
        ],
        tags={
            "et": "vero",
            "voluptatem": "ex",
        },
        value="magni",
    ),
)
    
res = s.sdk.create_api_key(req)

if res.api_key is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_api_key` - <p>Create an <a>ApiKey</a> resource. </p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-api-key.html">AWS CLI</a></div>
* `create_authorizer` - <p>Adds a new <a>Authorizer</a> resource to an existing <a>RestApi</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-authorizer.html">AWS CLI</a></div>
* `create_base_path_mapping` - Creates a new <a>BasePathMapping</a> resource.
* `create_deployment` - Creates a <a>Deployment</a> resource, which makes a specified <a>RestApi</a> callable over the internet.
* `create_documentation_part`
* `create_documentation_version`
* `create_domain_name` - Creates a new domain name.
* `create_model` - Adds a new <a>Model</a> resource to an existing <a>RestApi</a> resource.
* `create_request_validator` - Creates a <a>ReqeustValidator</a> of a given <a>RestApi</a>.
* `create_resource` - Creates a <a>Resource</a> resource.
* `create_rest_api` - Creates a new <a>RestApi</a> resource.
* `create_stage` - Creates a new <a>Stage</a> resource that references a pre-existing <a>Deployment</a> for the API. 
* `create_usage_plan` - Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. 
* `create_usage_plan_key` - Creates a usage plan key for adding an existing API key to a usage plan.
* `create_vpc_link` - Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.
* `delete_api_key` - Deletes the <a>ApiKey</a> resource.
* `delete_authorizer` - <p>Deletes an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/delete-authorizer.html">AWS CLI</a></div>
* `delete_base_path_mapping` - Deletes the <a>BasePathMapping</a> resource.
* `delete_client_certificate` - Deletes the <a>ClientCertificate</a> resource.
* `delete_deployment` - Deletes a <a>Deployment</a> resource. Deleting a deployment will only succeed if there are no <a>Stage</a> resources associated with it.
* `delete_documentation_part`
* `delete_documentation_version`
* `delete_domain_name` - Deletes the <a>DomainName</a> resource.
* `delete_gateway_response` - Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.
* `delete_integration` - Represents a delete integration.
* `delete_integration_response` - Represents a delete integration response.
* `delete_method` - Deletes an existing <a>Method</a> resource.
* `delete_method_response` - Deletes an existing <a>MethodResponse</a> resource.
* `delete_model` - Deletes a model.
* `delete_request_validator` - Deletes a <a>RequestValidator</a> of a given <a>RestApi</a>.
* `delete_resource` - Deletes a <a>Resource</a> resource.
* `delete_rest_api` - Deletes the specified API.
* `delete_stage` - Deletes a <a>Stage</a> resource.
* `delete_usage_plan` - Deletes a usage plan of a given plan Id.
* `delete_usage_plan_key` - Deletes a usage plan key and remove the underlying API key from the associated usage plan.
* `delete_vpc_link` - Deletes an existing <a>VpcLink</a> of a specified identifier.
* `flush_stage_authorizers_cache` - Flushes all authorizer cache entries on a stage.
* `flush_stage_cache` - Flushes a stage's cache.
* `generate_client_certificate` - Generates a <a>ClientCertificate</a> resource.
* `get_account` - Gets information about the current <a>Account</a> resource.
* `get_api_key` - Gets information about the current <a>ApiKey</a> resource.
* `get_api_keys` - Gets information about the current <a>ApiKeys</a> resource.
* `get_authorizer` - <p>Describe an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizer.html">AWS CLI</a></div>
* `get_authorizers` - <p>Describe an existing <a>Authorizers</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizers.html">AWS CLI</a></div>
* `get_base_path_mapping` - Describe a <a>BasePathMapping</a> resource.
* `get_base_path_mappings` - Represents a collection of <a>BasePathMapping</a> resources.
* `get_client_certificate` - Gets information about the current <a>ClientCertificate</a> resource.
* `get_client_certificates` - Gets a collection of <a>ClientCertificate</a> resources.
* `get_deployment` - Gets information about a <a>Deployment</a> resource.
* `get_deployments` - Gets information about a <a>Deployments</a> collection.
* `get_documentation_part`
* `get_documentation_parts`
* `get_documentation_version`
* `get_documentation_versions`
* `get_domain_name` - Represents a domain name that is contained in a simpler, more intuitive URL that can be called.
* `get_domain_names` - Represents a collection of <a>DomainName</a> resources.
* `get_export` - Exports a deployed version of a <a>RestApi</a> in a specified format.
* `get_gateway_response` - Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.
* `get_gateway_responses` - Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.
* `get_integration` - Get the integration settings.
* `get_integration_response` - Represents a get integration response.
* `get_method` - Describe an existing <a>Method</a> resource.
* `get_method_response` - Describes a <a>MethodResponse</a> resource.
* `get_model` - Describes an existing model defined for a <a>RestApi</a> resource.
* `get_model_template` - Generates a sample mapping template that can be used to transform a payload into the structure of a model.
* `get_models` - Describes existing <a>Models</a> defined for a <a>RestApi</a> resource.
* `get_request_validator` - Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.
* `get_request_validators` - Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.
* `get_resource` - Lists information about a resource.
* `get_resources` - Lists information about a collection of <a>Resource</a> resources.
* `get_rest_api` - Lists the <a>RestApi</a> resource in the collection.
* `get_rest_apis` - Lists the <a>RestApis</a> resources for your collection.
* `get_sdk` - Generates a client SDK for a <a>RestApi</a> and <a>Stage</a>.
* `get_sdk_type`
* `get_sdk_types`
* `get_stage` - Gets information about a <a>Stage</a> resource.
* `get_stages` - Gets information about one or more <a>Stage</a> resources.
* `get_tags` - Gets the <a>Tags</a> collection for a given resource.
* `get_usage` - Gets the usage data of a usage plan in a specified time interval.
* `get_usage_plan` - Gets a usage plan of a given plan identifier.
* `get_usage_plan_key` - Gets a usage plan key of a given key identifier.
* `get_usage_plan_keys` - Gets all the usage plan keys representing the API keys added to a specified usage plan.
* `get_usage_plans` - Gets all the usage plans of the caller's account.
* `get_vpc_link` - Gets a specified VPC link under the caller's account in a region.
* `get_vpc_links` - Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.
* `import_api_keys` - Import API keys from an external source, such as a CSV-formatted file.
* `import_documentation_parts`
* `import_rest_api` - A feature of the API Gateway control service for creating a new API from an external API definition file.
* `put_gateway_response` - Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.
* `put_integration` - Sets up a method's integration.
* `put_integration_response` - Represents a put integration.
* `put_method` - Add a method to an existing <a>Resource</a> resource.
* `put_method_response` - Adds a <a>MethodResponse</a> to an existing <a>Method</a> resource.
* `put_rest_api` - A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.
* `tag_resource` - Adds or updates a tag on a given resource.
* `test_invoke_authorizer` - <p>Simulate the execution of an <a>Authorizer</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
* `test_invoke_method` - Simulate the execution of a <a>Method</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.
* `untag_resource` - Removes a tag from a given resource.
* `update_account` - Changes information about the current <a>Account</a> resource.
* `update_api_key` - Changes information about an <a>ApiKey</a> resource.
* `update_authorizer` - <p>Updates an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/update-authorizer.html">AWS CLI</a></div>
* `update_base_path_mapping` - Changes information about the <a>BasePathMapping</a> resource.
* `update_client_certificate` - Changes information about an <a>ClientCertificate</a> resource.
* `update_deployment` - Changes information about a <a>Deployment</a> resource.
* `update_documentation_part`
* `update_documentation_version`
* `update_domain_name` - Changes information about the <a>DomainName</a> resource.
* `update_gateway_response` - Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.
* `update_integration` - Represents an update integration.
* `update_integration_response` - Represents an update integration response.
* `update_method` - Updates an existing <a>Method</a> resource.
* `update_method_response` - Updates an existing <a>MethodResponse</a> resource.
* `update_model` - Changes information about a model.
* `update_request_validator` - Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.
* `update_resource` - Changes information about a <a>Resource</a> resource.
* `update_rest_api` - Changes information about the specified API.
* `update_stage` - Changes information about a <a>Stage</a> resource.
* `update_usage` - Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.
* `update_usage_plan` - Updates a usage plan of a given plan Id.
* `update_vpc_link` - Updates an existing <a>VpcLink</a> of a specified identifier.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
