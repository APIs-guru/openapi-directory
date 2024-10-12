# RecoverOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**status** | [**BackgroundTaskStatus**](BackgroundTaskStatus.md) |  | 
**task** | **str** |  | [optional] [default to 'endpoint.recover']

## Example

```python
from openapi_client.models.recover_out import RecoverOut

# TODO update the JSON string below
json = "{}"
# create an instance of RecoverOut from a JSON string
recover_out_instance = RecoverOut.from_json(json)
# print the JSON string representation of the object
print(RecoverOut.to_json())

# convert the object into a dict
recover_out_dict = recover_out_instance.to_dict()
# create an instance of RecoverOut from a dict
recover_out_from_dict = RecoverOut.from_dict(recover_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


