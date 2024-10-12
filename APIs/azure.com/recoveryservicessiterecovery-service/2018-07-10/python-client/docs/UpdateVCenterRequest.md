# UpdateVCenterRequest

Input required to update vCenter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateVCenterRequestProperties**](UpdateVCenterRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_v_center_request import UpdateVCenterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateVCenterRequest from a JSON string
update_v_center_request_instance = UpdateVCenterRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateVCenterRequest.to_json())

# convert the object into a dict
update_v_center_request_dict = update_v_center_request_instance.to_dict()
# create an instance of UpdateVCenterRequest from a dict
update_v_center_request_from_dict = UpdateVCenterRequest.from_dict(update_v_center_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


