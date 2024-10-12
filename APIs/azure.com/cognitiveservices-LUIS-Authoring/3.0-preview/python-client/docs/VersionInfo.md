# VersionInfo

Object model of an application version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_endpoint_key** | **Dict[str, str]** | The endpoint key. | [optional] 
**created_date_time** | **datetime** | The version&#39;s creation timestamp. | [optional] 
**endpoint_hits_count** | **int** | Number of calls made to this endpoint. | [optional] 
**endpoint_url** | **str** | The Runtime endpoint URL for this model version. | [optional] 
**entities_count** | **int** | Number of entities in this model. | [optional] 
**external_api_keys** | **object** | External keys. | [optional] 
**intents_count** | **int** | Number of intents in this model. | [optional] 
**last_modified_date_time** | **datetime** | Timestamp of the last update. | [optional] 
**last_published_date_time** | **datetime** | Timestamp when was last published. | [optional] 
**last_trained_date_time** | **datetime** | Timestamp of the last time the model was trained. | [optional] 
**training_status** | **str** | The current training status. | 
**version** | **str** | The version ID. E.g.: \&quot;0.1\&quot; | 

## Example

```python
from openapi_client.models.version_info import VersionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VersionInfo from a JSON string
version_info_instance = VersionInfo.from_json(json)
# print the JSON string representation of the object
print(VersionInfo.to_json())

# convert the object into a dict
version_info_dict = version_info_instance.to_dict()
# create an instance of VersionInfo from a dict
version_info_from_dict = VersionInfo.from_dict(version_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


