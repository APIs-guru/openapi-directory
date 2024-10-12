# ApiVersionSetEntityBase

Api Version set base parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of API Version Set. | [optional] 
**version_header_name** | **str** | Name of HTTP header parameter that indicates the API Version if versioningScheme is set to &#x60;header&#x60;. | [optional] 
**version_query_name** | **str** | Name of query parameter that indicates the API Version if versioningScheme is set to &#x60;query&#x60;. | [optional] 

## Example

```python
from openapi_client.models.api_version_set_entity_base import ApiVersionSetEntityBase

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersionSetEntityBase from a JSON string
api_version_set_entity_base_instance = ApiVersionSetEntityBase.from_json(json)
# print the JSON string representation of the object
print(ApiVersionSetEntityBase.to_json())

# convert the object into a dict
api_version_set_entity_base_dict = api_version_set_entity_base_instance.to_dict()
# create an instance of ApiVersionSetEntityBase from a dict
api_version_set_entity_base_from_dict = ApiVersionSetEntityBase.from_dict(api_version_set_entity_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


