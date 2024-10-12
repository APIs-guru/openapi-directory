# Model401UNAUTHORIZED


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**timestamp** | **str** | Timestamp of the request    * e.g.: &#x60;2019-09-17T03:20:45.737043Z&#x60;  | [optional] 
**tracking_id** | **str** | Tracking identifier for this error response | [optional] 

## Example

```python
from openapi_client.models.model401_unauthorized import Model401UNAUTHORIZED

# TODO update the JSON string below
json = "{}"
# create an instance of Model401UNAUTHORIZED from a JSON string
model401_unauthorized_instance = Model401UNAUTHORIZED.from_json(json)
# print the JSON string representation of the object
print(Model401UNAUTHORIZED.to_json())

# convert the object into a dict
model401_unauthorized_dict = model401_unauthorized_instance.to_dict()
# create an instance of Model401UNAUTHORIZED from a dict
model401_unauthorized_from_dict = Model401UNAUTHORIZED.from_dict(model401_unauthorized_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


