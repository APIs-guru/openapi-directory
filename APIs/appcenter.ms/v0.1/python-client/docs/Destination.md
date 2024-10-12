# Destination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of a distribution group / store. The release will be associated with this distribution group / store. If the distribution group / store doesn&#39;t exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence. | 
**name** | **str** | Name of a distribution group / distribution store. The release will be associated with this distribution group or store. If the distribution group / store doesn&#39;t exist a 400 is returned. If both distribution group / store name and id are passed, the id is taking precedence. | [optional] 
**is_latest** | **bool** | Is the containing release the latest one in this distribution store. | [optional] 
**publishing_status** | **str** | publishing status of the release in the store. | [optional] 
**type** | **str** | type of the distribution store currently stores type can be intune, googleplay or windows. | [optional] 
**destination_type** | **str** | Destination can be either store or group. | [optional] 
**display_name** | **str** | Display name for the group or tester | [optional] 

## Example

```python
from openapi_client.models.destination import Destination

# TODO update the JSON string below
json = "{}"
# create an instance of Destination from a JSON string
destination_instance = Destination.from_json(json)
# print the JSON string representation of the object
print(Destination.to_json())

# convert the object into a dict
destination_dict = destination_instance.to_dict()
# create an instance of Destination from a dict
destination_from_dict = Destination.from_dict(destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


