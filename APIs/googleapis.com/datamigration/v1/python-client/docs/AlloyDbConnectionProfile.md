# AlloyDbConnectionProfile

Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Required. The AlloyDB cluster ID that this connection profile is associated with. | [optional] 
**settings** | [**AlloyDbSettings**](AlloyDbSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.alloy_db_connection_profile import AlloyDbConnectionProfile

# TODO update the JSON string below
json = "{}"
# create an instance of AlloyDbConnectionProfile from a JSON string
alloy_db_connection_profile_instance = AlloyDbConnectionProfile.from_json(json)
# print the JSON string representation of the object
print(AlloyDbConnectionProfile.to_json())

# convert the object into a dict
alloy_db_connection_profile_dict = alloy_db_connection_profile_instance.to_dict()
# create an instance of AlloyDbConnectionProfile from a dict
alloy_db_connection_profile_from_dict = AlloyDbConnectionProfile.from_dict(alloy_db_connection_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


