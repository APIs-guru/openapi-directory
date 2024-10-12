# ShareResourceData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | ID of the shared resource. | [optional] 
**type** | **str** | Type is resource.  | [optional] 

## Example

```python
from openapi_client.models.share_resource_data import ShareResourceData

# TODO update the JSON string below
json = "{}"
# create an instance of ShareResourceData from a JSON string
share_resource_data_instance = ShareResourceData.from_json(json)
# print the JSON string representation of the object
print(ShareResourceData.to_json())

# convert the object into a dict
share_resource_data_dict = share_resource_data_instance.to_dict()
# create an instance of ShareResourceData from a dict
share_resource_data_from_dict = ShareResourceData.from_dict(share_resource_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


