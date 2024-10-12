# CloudRunConfig

Configuration options for the Cloud Run feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Whether Cloud Run addon is enabled for this cluster. | [optional] 
**load_balancer_type** | **str** | Which load balancer type is installed for Cloud Run. | [optional] 

## Example

```python
from openapi_client.models.cloud_run_config import CloudRunConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudRunConfig from a JSON string
cloud_run_config_instance = CloudRunConfig.from_json(json)
# print the JSON string representation of the object
print(CloudRunConfig.to_json())

# convert the object into a dict
cloud_run_config_dict = cloud_run_config_instance.to_dict()
# create an instance of CloudRunConfig from a dict
cloud_run_config_from_dict = CloudRunConfig.from_dict(cloud_run_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


