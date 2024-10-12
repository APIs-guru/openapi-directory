# BatchUpdateFormResponse

Response to a BatchUpdateFormRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form** | [**Form**](Form.md) |  | [optional] 
**replies** | [**List[Response]**](Response.md) | The reply of the updates. This maps 1:1 with the update requests, although replies to some requests may be empty. | [optional] 
**write_control** | [**WriteControl**](WriteControl.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_update_form_response import BatchUpdateFormResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateFormResponse from a JSON string
batch_update_form_response_instance = BatchUpdateFormResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateFormResponse.to_json())

# convert the object into a dict
batch_update_form_response_dict = batch_update_form_response_instance.to_dict()
# create an instance of BatchUpdateFormResponse from a dict
batch_update_form_response_from_dict = BatchUpdateFormResponse.from_dict(batch_update_form_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


