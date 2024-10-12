# CreateCustomMappingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Target Field Mapping value | 

## Example

```python
from openapi_client.models.create_custom_mapping_request import CreateCustomMappingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomMappingRequest from a JSON string
create_custom_mapping_request_instance = CreateCustomMappingRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCustomMappingRequest.to_json())

# convert the object into a dict
create_custom_mapping_request_dict = create_custom_mapping_request_instance.to_dict()
# create an instance of CreateCustomMappingRequest from a dict
create_custom_mapping_request_from_dict = CreateCustomMappingRequest.from_dict(create_custom_mapping_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


