# DeletePickupByIdResponseBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Error]**](Error.md) | The errors associated with the failed API call | [readonly] 
**request_id** | **str** | A UUID that uniquely identifies the request id. This can be given to the support team to help debug non-trivial issues that may occur  | 
**pickup_id** | **str** | Pickup Resource ID | 

## Example

```python
from openapi_client.models.delete_pickup_by_id_response_body import DeletePickupByIdResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of DeletePickupByIdResponseBody from a JSON string
delete_pickup_by_id_response_body_instance = DeletePickupByIdResponseBody.from_json(json)
# print the JSON string representation of the object
print(DeletePickupByIdResponseBody.to_json())

# convert the object into a dict
delete_pickup_by_id_response_body_dict = delete_pickup_by_id_response_body_instance.to_dict()
# create an instance of DeletePickupByIdResponseBody from a dict
delete_pickup_by_id_response_body_from_dict = DeletePickupByIdResponseBody.from_dict(delete_pickup_by_id_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


