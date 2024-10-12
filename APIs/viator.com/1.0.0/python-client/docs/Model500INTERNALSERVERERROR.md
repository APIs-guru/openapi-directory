# Model500INTERNALSERVERERROR


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**timestamp** | **str** | Timestamp of the request    * e.g.: &#x60;2019-09-17T03:20:45.737043Z&#x60;  | [optional] 
**tracking_id** | **str** | Tracking identifier for this error response | [optional] 

## Example

```python
from openapi_client.models.model500_internalservererror import Model500INTERNALSERVERERROR

# TODO update the JSON string below
json = "{}"
# create an instance of Model500INTERNALSERVERERROR from a JSON string
model500_internalservererror_instance = Model500INTERNALSERVERERROR.from_json(json)
# print the JSON string representation of the object
print(Model500INTERNALSERVERERROR.to_json())

# convert the object into a dict
model500_internalservererror_dict = model500_internalservererror_instance.to_dict()
# create an instance of Model500INTERNALSERVERERROR from a dict
model500_internalservererror_from_dict = Model500INTERNALSERVERERROR.from_dict(model500_internalservererror_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


