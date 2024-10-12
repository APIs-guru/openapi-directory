# BatchError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**message** | [**ErrorMessage**](ErrorMessage.md) |  | [optional] 
**values** | [**List[BatchErrorDetail]**](BatchErrorDetail.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_error import BatchError

# TODO update the JSON string below
json = "{}"
# create an instance of BatchError from a JSON string
batch_error_instance = BatchError.from_json(json)
# print the JSON string representation of the object
print(BatchError.to_json())

# convert the object into a dict
batch_error_dict = batch_error_instance.to_dict()
# create an instance of BatchError from a dict
batch_error_from_dict = BatchError.from_dict(batch_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


