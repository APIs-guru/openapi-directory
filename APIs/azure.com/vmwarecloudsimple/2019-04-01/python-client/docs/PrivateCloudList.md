# PrivateCloudList

List of private clouds

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next list of Private Clouds | [optional] 
**value** | [**List[PrivateCloud]**](PrivateCloud.md) | the list of private clouds | [optional] 

## Example

```python
from openapi_client.models.private_cloud_list import PrivateCloudList

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateCloudList from a JSON string
private_cloud_list_instance = PrivateCloudList.from_json(json)
# print the JSON string representation of the object
print(PrivateCloudList.to_json())

# convert the object into a dict
private_cloud_list_dict = private_cloud_list_instance.to_dict()
# create an instance of PrivateCloudList from a dict
private_cloud_list_from_dict = PrivateCloudList.from_dict(private_cloud_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


