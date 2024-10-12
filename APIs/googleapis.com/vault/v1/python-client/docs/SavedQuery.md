# SavedQuery

The definition of a saved query. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The server-generated timestamp when the saved query was created. | [optional] 
**display_name** | **str** | The name of the saved query. | [optional] 
**matter_id** | **str** | Output only. The matter ID of the matter the saved query is saved in. The server does not use this field during create and always uses matter ID in the URL. | [optional] 
**query** | [**Query**](Query.md) |  | [optional] 
**saved_query_id** | **str** | A unique identifier for the saved query. | [optional] 

## Example

```python
from openapi_client.models.saved_query import SavedQuery

# TODO update the JSON string below
json = "{}"
# create an instance of SavedQuery from a JSON string
saved_query_instance = SavedQuery.from_json(json)
# print the JSON string representation of the object
print(SavedQuery.to_json())

# convert the object into a dict
saved_query_dict = saved_query_instance.to_dict()
# create an instance of SavedQuery from a dict
saved_query_from_dict = SavedQuery.from_dict(saved_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


