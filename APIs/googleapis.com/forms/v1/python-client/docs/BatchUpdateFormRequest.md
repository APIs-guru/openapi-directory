# BatchUpdateFormRequest

A batch of updates to perform on a form. All the specified updates are made or none of them are.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_form_in_response** | **bool** | Whether to return an updated version of the model in the response. | [optional] 
**requests** | [**List[Request]**](Request.md) | Required. The update requests of this batch. | [optional] 
**write_control** | [**WriteControl**](WriteControl.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_update_form_request import BatchUpdateFormRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateFormRequest from a JSON string
batch_update_form_request_instance = BatchUpdateFormRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateFormRequest.to_json())

# convert the object into a dict
batch_update_form_request_dict = batch_update_form_request_instance.to_dict()
# create an instance of BatchUpdateFormRequest from a dict
batch_update_form_request_from_dict = BatchUpdateFormRequest.from_dict(batch_update_form_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


