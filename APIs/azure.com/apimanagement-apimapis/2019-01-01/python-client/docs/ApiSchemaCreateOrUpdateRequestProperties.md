# ApiSchemaCreateOrUpdateRequestProperties

API Schema create or update contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). &lt;/br&gt; - &#x60;Swagger&#x60; Schema use &#x60;application/vnd.ms-azure-apim.swagger.definitions+json&#x60; &lt;/br&gt; - &#x60;WSDL&#x60; Schema use &#x60;application/vnd.ms-azure-apim.xsd+xml&#x60; &lt;/br&gt; - &#x60;OpenApi&#x60; Schema use &#x60;application/vnd.oai.openapi.components+json&#x60; &lt;/br&gt; - &#x60;WADL Schema&#x60; use &#x60;application/vnd.ms-azure-apim.wadl.grammars+xml&#x60;. | 
**document** | [**ApiSchemaCreateOrUpdateRequestPropertiesDocument**](ApiSchemaCreateOrUpdateRequestPropertiesDocument.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_schema_create_or_update_request_properties import ApiSchemaCreateOrUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiSchemaCreateOrUpdateRequestProperties from a JSON string
api_schema_create_or_update_request_properties_instance = ApiSchemaCreateOrUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(ApiSchemaCreateOrUpdateRequestProperties.to_json())

# convert the object into a dict
api_schema_create_or_update_request_properties_dict = api_schema_create_or_update_request_properties_instance.to_dict()
# create an instance of ApiSchemaCreateOrUpdateRequestProperties from a dict
api_schema_create_or_update_request_properties_from_dict = ApiSchemaCreateOrUpdateRequestProperties.from_dict(api_schema_create_or_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


