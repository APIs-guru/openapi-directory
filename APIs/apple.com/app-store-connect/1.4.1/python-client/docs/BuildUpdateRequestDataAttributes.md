# BuildUpdateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expired** | **bool** |  | [optional] 
**uses_non_exempt_encryption** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.build_update_request_data_attributes import BuildUpdateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BuildUpdateRequestDataAttributes from a JSON string
build_update_request_data_attributes_instance = BuildUpdateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(BuildUpdateRequestDataAttributes.to_json())

# convert the object into a dict
build_update_request_data_attributes_dict = build_update_request_data_attributes_instance.to_dict()
# create an instance of BuildUpdateRequestDataAttributes from a dict
build_update_request_data_attributes_from_dict = BuildUpdateRequestDataAttributes.from_dict(build_update_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


