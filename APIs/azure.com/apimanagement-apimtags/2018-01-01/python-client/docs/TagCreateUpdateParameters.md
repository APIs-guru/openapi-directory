# TagCreateUpdateParameters

Parameters supplied to Create/Update Tag operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TagContractProperties**](TagContractProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_create_update_parameters import TagCreateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TagCreateUpdateParameters from a JSON string
tag_create_update_parameters_instance = TagCreateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TagCreateUpdateParameters.to_json())

# convert the object into a dict
tag_create_update_parameters_dict = tag_create_update_parameters_instance.to_dict()
# create an instance of TagCreateUpdateParameters from a dict
tag_create_update_parameters_from_dict = TagCreateUpdateParameters.from_dict(tag_create_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


