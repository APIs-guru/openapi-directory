# AddToBatchRequestBody

An add to batch request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_ids** | **List[str]** | Array of Rate IDs to be modifed on the batch | [optional] 
**shipment_ids** | **List[str]** | The Shipment Ids to be modified on the batch | [optional] 

## Example

```python
from openapi_client.models.add_to_batch_request_body import AddToBatchRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddToBatchRequestBody from a JSON string
add_to_batch_request_body_instance = AddToBatchRequestBody.from_json(json)
# print the JSON string representation of the object
print(AddToBatchRequestBody.to_json())

# convert the object into a dict
add_to_batch_request_body_dict = add_to_batch_request_body_instance.to_dict()
# create an instance of AddToBatchRequestBody from a dict
add_to_batch_request_body_from_dict = AddToBatchRequestBody.from_dict(add_to_batch_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


