# CloudErrorBody

Body of an error from a REST request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] 
**details** | [**List[CloudErrorBody]**](CloudErrorBody.md) | Inner errors. | [optional] 
**message** | **str** | The error message. | [optional] 
**target** | **str** | The error target. | [optional] 

## Example

```python
from openapi_client.models.cloud_error_body import CloudErrorBody

# TODO update the JSON string below
json = "{}"
# create an instance of CloudErrorBody from a JSON string
cloud_error_body_instance = CloudErrorBody.from_json(json)
# print the JSON string representation of the object
print(CloudErrorBody.to_json())

# convert the object into a dict
cloud_error_body_dict = cloud_error_body_instance.to_dict()
# create an instance of CloudErrorBody from a dict
cloud_error_body_from_dict = CloudErrorBody.from_dict(cloud_error_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


