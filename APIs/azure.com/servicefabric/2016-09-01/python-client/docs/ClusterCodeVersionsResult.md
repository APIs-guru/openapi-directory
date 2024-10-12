# ClusterCodeVersionsResult

The result of the ServiceFabric runtime versions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identification of the result | [optional] 
**name** | **str** | The name of the result | [optional] 
**properties** | [**ClusterVersionDetails**](ClusterVersionDetails.md) |  | [optional] 
**type** | **str** | The result resource type | [optional] 

## Example

```python
from openapi_client.models.cluster_code_versions_result import ClusterCodeVersionsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterCodeVersionsResult from a JSON string
cluster_code_versions_result_instance = ClusterCodeVersionsResult.from_json(json)
# print the JSON string representation of the object
print(ClusterCodeVersionsResult.to_json())

# convert the object into a dict
cluster_code_versions_result_dict = cluster_code_versions_result_instance.to_dict()
# create an instance of ClusterCodeVersionsResult from a dict
cluster_code_versions_result_from_dict = ClusterCodeVersionsResult.from_dict(cluster_code_versions_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


