# StretchedClusterConfig

Configuration of a stretched cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preferred_location** | **str** | Required. Zone that will remain operational when connection between the two zones is lost. Specify the resource name of a zone that belongs to the region of the private cloud. For example: &#x60;projects/{project}/locations/europe-west3-a&#x60; where &#x60;{project}&#x60; can either be a project number or a project ID. | [optional] 
**secondary_location** | **str** | Required. Additional zone for a higher level of availability and load balancing. Specify the resource name of a zone that belongs to the region of the private cloud. For example: &#x60;projects/{project}/locations/europe-west3-b&#x60; where &#x60;{project}&#x60; can either be a project number or a project ID. | [optional] 

## Example

```python
from openapi_client.models.stretched_cluster_config import StretchedClusterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StretchedClusterConfig from a JSON string
stretched_cluster_config_instance = StretchedClusterConfig.from_json(json)
# print the JSON string representation of the object
print(StretchedClusterConfig.to_json())

# convert the object into a dict
stretched_cluster_config_dict = stretched_cluster_config_instance.to_dict()
# create an instance of StretchedClusterConfig from a dict
stretched_cluster_config_from_dict = StretchedClusterConfig.from_dict(stretched_cluster_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


