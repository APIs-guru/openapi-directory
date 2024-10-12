# Settings

Common settings field for backup management

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_compression** | **bool** | Workload compression flag. This has been added so that &#39;isSqlCompression&#39;  will be deprecated once clients upgrade to consider this flag. | [optional] 
**issqlcompression** | **bool** | SQL compression flag | [optional] 
**time_zone** | **str** | TimeZone optional input as string. For example: TimeZone &#x3D; \&quot;Pacific Standard Time\&quot;. | [optional] 

## Example

```python
from openapi_client.models.settings import Settings

# TODO update the JSON string below
json = "{}"
# create an instance of Settings from a JSON string
settings_instance = Settings.from_json(json)
# print the JSON string representation of the object
print(Settings.to_json())

# convert the object into a dict
settings_dict = settings_instance.to_dict()
# create an instance of Settings from a dict
settings_from_dict = Settings.from_dict(settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


