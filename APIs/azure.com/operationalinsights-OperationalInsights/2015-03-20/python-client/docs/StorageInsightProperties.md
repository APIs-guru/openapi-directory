# StorageInsightProperties

Storage insight properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers** | **List[str]** | The names of the blob containers that the workspace should read | [optional] 
**status** | [**StorageInsightStatus**](StorageInsightStatus.md) |  | [optional] 
**storage_account** | [**StorageAccount**](StorageAccount.md) |  | 
**tables** | **List[str]** | The names of the Azure tables that the workspace should read | [optional] 

## Example

```python
from openapi_client.models.storage_insight_properties import StorageInsightProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageInsightProperties from a JSON string
storage_insight_properties_instance = StorageInsightProperties.from_json(json)
# print the JSON string representation of the object
print(StorageInsightProperties.to_json())

# convert the object into a dict
storage_insight_properties_dict = storage_insight_properties_instance.to_dict()
# create an instance of StorageInsightProperties from a dict
storage_insight_properties_from_dict = StorageInsightProperties.from_dict(storage_insight_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


