# ReimageNodeRequest

Request for ReimageNode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tensorflow_version** | **str** | The version for reimage to create. | [optional] 

## Example

```python
from openapi_client.models.reimage_node_request import ReimageNodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReimageNodeRequest from a JSON string
reimage_node_request_instance = ReimageNodeRequest.from_json(json)
# print the JSON string representation of the object
print(ReimageNodeRequest.to_json())

# convert the object into a dict
reimage_node_request_dict = reimage_node_request_instance.to_dict()
# create an instance of ReimageNodeRequest from a dict
reimage_node_request_from_dict = ReimageNodeRequest.from_dict(reimage_node_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


