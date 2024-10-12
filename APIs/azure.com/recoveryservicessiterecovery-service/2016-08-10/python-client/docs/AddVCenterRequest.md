# AddVCenterRequest

Input required to add vCenter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AddVCenterRequestProperties**](AddVCenterRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_v_center_request import AddVCenterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddVCenterRequest from a JSON string
add_v_center_request_instance = AddVCenterRequest.from_json(json)
# print the JSON string representation of the object
print(AddVCenterRequest.to_json())

# convert the object into a dict
add_v_center_request_dict = add_v_center_request_instance.to_dict()
# create an instance of AddVCenterRequest from a dict
add_v_center_request_from_dict = AddVCenterRequest.from_dict(add_v_center_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


