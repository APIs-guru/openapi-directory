# CloudDataLineageIntegration

Configuration for Cloud Data Lineage integration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Optional. Whether or not Cloud Data Lineage integration is enabled. | [optional] 

## Example

```python
from openapi_client.models.cloud_data_lineage_integration import CloudDataLineageIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of CloudDataLineageIntegration from a JSON string
cloud_data_lineage_integration_instance = CloudDataLineageIntegration.from_json(json)
# print the JSON string representation of the object
print(CloudDataLineageIntegration.to_json())

# convert the object into a dict
cloud_data_lineage_integration_dict = cloud_data_lineage_integration_instance.to_dict()
# create an instance of CloudDataLineageIntegration from a dict
cloud_data_lineage_integration_from_dict = CloudDataLineageIntegration.from_dict(cloud_data_lineage_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


