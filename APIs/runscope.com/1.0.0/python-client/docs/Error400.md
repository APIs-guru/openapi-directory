# Error400


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**more_info** | **str** |  | [optional] 
**status** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.error400 import Error400

# TODO update the JSON string below
json = "{}"
# create an instance of Error400 from a JSON string
error400_instance = Error400.from_json(json)
# print the JSON string representation of the object
print(Error400.to_json())

# convert the object into a dict
error400_dict = error400_instance.to_dict()
# create an instance of Error400 from a dict
error400_from_dict = Error400.from_dict(error400_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


