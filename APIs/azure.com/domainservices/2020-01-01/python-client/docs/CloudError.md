# CloudError

An error response from the Domain Services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**CloudErrorBody**](CloudErrorBody.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_error import CloudError

# TODO update the JSON string below
json = "{}"
# create an instance of CloudError from a JSON string
cloud_error_instance = CloudError.from_json(json)
# print the JSON string representation of the object
print(CloudError.to_json())

# convert the object into a dict
cloud_error_dict = cloud_error_instance.to_dict()
# create an instance of CloudError from a dict
cloud_error_from_dict = CloudError.from_dict(cloud_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


