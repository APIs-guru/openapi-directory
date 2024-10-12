# Custom


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ref1** | **str** | alphanumeric (256) | [optional] 
**ref2** | **str** | alphanumeric (256) | [optional] 
**ref3** | **str** | alphanumeric (256) | [optional] 
**ref4** | **str** | alphanumeric (256) | [optional] 
**ref5** | **str** | alphanumeric (256) | [optional] 

## Example

```python
from openapi_client.models.custom import Custom

# TODO update the JSON string below
json = "{}"
# create an instance of Custom from a JSON string
custom_instance = Custom.from_json(json)
# print the JSON string representation of the object
print(Custom.to_json())

# convert the object into a dict
custom_dict = custom_instance.to_dict()
# create an instance of Custom from a dict
custom_from_dict = Custom.from_dict(custom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


