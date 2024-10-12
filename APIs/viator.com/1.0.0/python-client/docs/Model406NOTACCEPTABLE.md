# Model406NOTACCEPTABLE


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**message** | **str** | Describes which in-header parameter was not acceptable to this system; e.g., &#39;Invalid value for header: exp-api-key&#39; | [optional] 
**timestamp** | **str** | Timestamp of the request    * e.g.: &#x60;2019-09-17T03:20:45.737043Z&#x60;  | [optional] 
**tracking_id** | **str** | Tracking identifier for this error response | [optional] 

## Example

```python
from openapi_client.models.model406_notacceptable import Model406NOTACCEPTABLE

# TODO update the JSON string below
json = "{}"
# create an instance of Model406NOTACCEPTABLE from a JSON string
model406_notacceptable_instance = Model406NOTACCEPTABLE.from_json(json)
# print the JSON string representation of the object
print(Model406NOTACCEPTABLE.to_json())

# convert the object into a dict
model406_notacceptable_dict = model406_notacceptable_instance.to_dict()
# create an instance of Model406NOTACCEPTABLE from a dict
model406_notacceptable_from_dict = Model406NOTACCEPTABLE.from_dict(model406_notacceptable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


