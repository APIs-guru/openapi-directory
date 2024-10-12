# NewModelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.new_model_request import NewModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of NewModelRequest from a JSON string
new_model_request_instance = NewModelRequest.from_json(json)
# print the JSON string representation of the object
print(NewModelRequest.to_json())

# convert the object into a dict
new_model_request_dict = new_model_request_instance.to_dict()
# create an instance of NewModelRequest from a dict
new_model_request_from_dict = NewModelRequest.from_dict(new_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


