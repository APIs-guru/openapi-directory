# Model503SERVICEUNAVAILABLE


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**timestamp** | **str** | Timestamp of the request e.g.: &#x60;2019-09-17T03:20:45.737043Z&#x60;  | [optional] 
**tracking_id** | **str** | Tracking identifier for this error response | [optional] 

## Example

```python
from openapi_client.models.model503_serviceunavailable import Model503SERVICEUNAVAILABLE

# TODO update the JSON string below
json = "{}"
# create an instance of Model503SERVICEUNAVAILABLE from a JSON string
model503_serviceunavailable_instance = Model503SERVICEUNAVAILABLE.from_json(json)
# print the JSON string representation of the object
print(Model503SERVICEUNAVAILABLE.to_json())

# convert the object into a dict
model503_serviceunavailable_dict = model503_serviceunavailable_instance.to_dict()
# create an instance of Model503SERVICEUNAVAILABLE from a dict
model503_serviceunavailable_from_dict = Model503SERVICEUNAVAILABLE.from_dict(model503_serviceunavailable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


