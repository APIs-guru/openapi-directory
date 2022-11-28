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
    
req = operations.CreateAPIRequest(
    headers=operations.CreateAPIHeaders(
        x_amz_algorithm="quae",
        x_amz_content_sha256="qui",
        x_amz_credential="magni",
        x_amz_date="minus",
        x_amz_security_token="sit",
        x_amz_signature="aut",
        x_amz_signed_headers="neque",
    ),
    request=operations.CreateAPIRequestBody(
        api_key_selection_expression="iusto",
        cors_configuration=operations.CreateAPIRequestBodyCorsConfiguration(
            allow_credentials=False,
            allow_headers=[
                "debitis",
                "autem",
            ],
            allow_methods=[
                "enim",
                "ut",
            ],
            allow_origins=[
                "nihil",
                "laborum",
                "recusandae",
            ],
            expose_headers=[
                "exercitationem",
                "iste",
            ],
            max_age=2856324619161861976,
        ),
        credentials_arn="id",
        description="autem",
        disable_execute_api_endpoint=True,
        disable_schema_validation=False,
        name="omnis",
        protocol_type="HTTP",
        route_key="qui",
        route_selection_expression="omnis",
        tags={
            "nostrum": "non",
            "sit": "repellat",
        },
        target="quo",
        version="dolorum",
    ),
)
    
res = s.sdk.create_api(req)

if res.create_api_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_api` - Creates an Api resource.
* `create_api_mapping` - Creates an API mapping.
* `create_authorizer` - Creates an Authorizer for an API.
* `create_deployment` - Creates a Deployment for an API.
* `create_domain_name` - Creates a domain name.
* `create_integration` - Creates an Integration.
* `create_integration_response` - Creates an IntegrationResponses.
* `create_model` - Creates a Model for an API.
* `create_route` - Creates a Route for an API.
* `create_route_response` - Creates a RouteResponse for a Route.
* `create_stage` - Creates a Stage for an API.
* `create_vpc_link` - Creates a VPC link.
* `delete_access_log_settings` - Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.
* `delete_api` - Deletes an Api resource.
* `delete_api_mapping` - Deletes an API mapping.
* `delete_authorizer` - Deletes an Authorizer.
* `delete_cors_configuration` - Deletes a CORS configuration.
* `delete_deployment` - Deletes a Deployment.
* `delete_domain_name` - Deletes a domain name.
* `delete_integration` - Deletes an Integration.
* `delete_integration_response` - Deletes an IntegrationResponses.
* `delete_model` - Deletes a Model.
* `delete_route` - Deletes a Route.
* `delete_route_request_parameter` - Deletes a route request parameter.
* `delete_route_response` - Deletes a RouteResponse.
* `delete_route_settings` - Deletes the RouteSettings for a stage.
* `delete_stage` - Deletes a Stage.
* `delete_vpc_link` - Deletes a VPC link.
* `export_api`
* `get_api` - Gets an Api resource.
* `get_api_mapping` - Gets an API mapping.
* `get_api_mappings` - Gets API mappings.
* `get_apis` - Gets a collection of Api resources.
* `get_authorizer` - Gets an Authorizer.
* `get_authorizers` - Gets the Authorizers for an API.
* `get_deployment` - Gets a Deployment.
* `get_deployments` - Gets the Deployments for an API.
* `get_domain_name` - Gets a domain name.
* `get_domain_names` - Gets the domain names for an AWS account.
* `get_integration` - Gets an Integration.
* `get_integration_response` - Gets an IntegrationResponses.
* `get_integration_responses` - Gets the IntegrationResponses for an Integration.
* `get_integrations` - Gets the Integrations for an API.
* `get_model` - Gets a Model.
* `get_model_template` - Gets a model template.
* `get_models` - Gets the Models for an API.
* `get_route` - Gets a Route.
* `get_route_response` - Gets a RouteResponse.
* `get_route_responses` - Gets the RouteResponses for a Route.
* `get_routes` - Gets the Routes for an API.
* `get_stage` - Gets a Stage.
* `get_stages` - Gets the Stages for an API.
* `get_tags` - Gets a collection of Tag resources.
* `get_vpc_link` - Gets a VPC link.
* `get_vpc_links` - Gets a collection of VPC links.
* `import_api` - Imports an API.
* `reimport_api` - Puts an Api resource.
* `reset_authorizers_cache` - Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.
* `tag_resource` - Creates a new Tag resource to represent a tag.
* `untag_resource` - Deletes a Tag.
* `update_api` - Updates an Api resource.
* `update_api_mapping` - The API mapping.
* `update_authorizer` - Updates an Authorizer.
* `update_deployment` - Updates a Deployment.
* `update_domain_name` - Updates a domain name.
* `update_integration` - Updates an Integration.
* `update_integration_response` - Updates an IntegrationResponses.
* `update_model` - Updates a Model.
* `update_route` - Updates a Route.
* `update_route_response` - Updates a RouteResponse.
* `update_stage` - Updates a Stage.
* `update_vpc_link` - Updates a VPC link.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
